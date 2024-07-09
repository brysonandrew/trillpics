4
Jump to Comments
15
Save

Cover image for ↩️ Native Undo & Redo for the Web
Google Web Dev profile imageSam Thorogood
Sam Thorogood for Google Web Dev
Posted on Apr 24, 2018 • Updated on Mar 9, 2019


16

8
↩️ Native Undo & Redo for the Web
#
undo
#
redo
#
execcommand
How can you support Undo and Redo natively for elements that don't support it by default? Think drag and drop reordering, games, or rich text editors where the built-in support just doesn't cut it. 🙅✂️📄

This is possible today using a bit of logic coupled with the execCommand method. First, a demo! Click/focus the maze, and navigate with your arrow keys (or use the buttons). Most importantly, be sure to try Undo and Redo to go back and forward.



There are a few ways to Undo—you probably tried Ctrl/Cmd-Z, but you can also use your browser's Undo menu item or right click on the page. On Mobile Safari 📱🤠, shake 👋 your phone to Undo ↩️.
(I'm not sure how to Undo on other mobile browsers.)

If you're just here for the code rather than the post, I've built an Undoer class, which provides helpers for native undo/redo. Check it out here ⤵️💻

Why
If you're building an interactive app-like experience for the web, you should aim to provide as many built-in UX flows as possible, so that your users can be productive. These might include supporting the ESC key, the browser's inbuilt navigation buttons, drag and drop, or even native sharing via the Web Share API—all idioms that even less savvy technical users are used to.

How
Under the hood, the maze above is actually modifying a text field—as a user would—and watching to see if it's value changes back to a previously recorded state. What does that mean?

Undo/Redo stack

As we make changes (the blue boxes above), we secretly do update a 'hidden' text field with a new number, which is an index into an array recording the position of the player.

When the player performs an Undo (the red boxes), we pop the last event off the stack, and call the maze back with the previous state. In this case, state 1: {x:2, y:1}.

The later states remain (in case the user calls Redo) until the user performs another action, when we erase them.

Build It
Let's plan out the flows. When the user uses their keyboard, we handle the event—both updating the maze and pushing a new state. And when the user performs undo or redo, we detect the change and restore the maze to whatever previous state we expect.

Interaction flow

Ok! Let's build it.

1. The 'hidden' text field
We create a text field as normal, and append it to the page. We don't use display: none or visibility: hidden to hide the field—hiding the element "properly" makes it ineligible for a browser's normal undo/redo stack. So in order to make it feel unusable, we:

set its tabIndex to -1, which removes it from normal tab order
add a focus handler which immediately blurs the element, so it never retains focus
can set its opacity/position such that the element isn't visible—although while you're testing, it can be good to keep it around
Here's how we add the undoer element:
const undoer = document.createElement('input');
undoer.value = '0';
undoer.tabIndex = -1;  // don't allow automatic tab
undoer.addEventListener('focus', () => {
  window.setTimeout(() => undoer.blur(), 0);  // prevent focus, delay for Safari
});

// You could hide it (but not with `display: none`—it must be on the page):
//undoer.style.opacity = 0;
//undoer.style.position = 'absolute';

document.body.appendChild(undoer);
Q: This input might confuse accessible user-agents. Please leave me a comment if you have ideas on how to solve this for screen readers etc!

2. Pretending to enter input
Let's create a method pushNewUndoState to push a new state onto the stack, and record these states. This is the key part of this post—we use execCommand to fake a user input. The code below pushes a new state onto the stack, and "types" the next number:
let duringInput = false;
const undoStack = [{x: 1, y: 1}];  // we have to start with our initial state
function pushNewUndoState(data) {
  // remove states past now, add our new state
  const nextStateId = +undoer.value + 1;
  undoStack.splice(nextStateId, undoStack.length - nextStateId, data);

  duringInput = true;

  // focus and "type" the next number
  undoer.focus();
  document.execCommand('selectAll');
  document.execCommand('insertText', false, nextStateId);

  duringInput = false;
}
The document.execCommand is very powerful and allows us to emulate user input on the page. In this case, we just want to select the current number and type a new number. The browser is smart enough to coalesce these two unique actions into undo "undoable" event.

Note that:

We focus on the undoer, but this is prevented by the event handler we set up initially

You could add code to refocus on the previous document.activeElement, if you're using focus in your application: otherwise the focus will be lost

The .splice method removes any states past our current one. This happens if the user undoes things, then performs a new action—it removes the possible redo actions.

3. Listening to input events
Finally, let's listen to changes in the input so we can trigger a callback letting the maze know the user wants to revert their position:
undoer.addEventListener('input', (ev) => {
  // nb. don't use 'change', it doesn't fire in all browsers
  if (!duringInput) {
    const data = undoStack[+undoer.value];
    updateMazeWithData(data);
  }
});
We don't want to trigger a callback duringInput, aka, when the pushNewUndoState method above is doing its work. We only want to know when the input has changed if the user performs an undo or redo.

4. Special-case for Firefox
Firefox has a long-standing issue that means that execCommand is only supported in a contentEditable. Supporting this is actually fairly easy—you can just swap out the 'hidden' input for an editable div, and use .textContent instead of .value—phew. That's explanation enough, but I've left the code changes out of this post.

The code I've included with this blog post just uses <div contentEditable>, but you could choose either approach. 🤔

🎉 That's all there is to it, but read on for some additional thoughts ⬇️

Extras
Keen observers might note that this is a very similar model to the History API, which uses history.pushState and window.onpopstate.

The onpopstate method is actually badly named—it is called whether the state is popped (the Back button) or pushed (the Forward action). The analogy in using native undo/redo is where we listen to the input event of our 'hidden' text input.

Intercepting Undo & Redo for text fields
This approach to undo and redo can be extended to work on text fields or elements which generate their own undo events. Why would you want to do this? As I mentioned in the very first paragraph, maybe you're building a rich text editor, and undo and redo isn't doing exactly what you want.

You can do this by using execCommand to immediately undo a user action, setting the updated value programmatically (which doesn't generate an undoable event) and then replace it with your own event, via our method pushNewUndoState.

For instance, we can piggyback the input event:
theInput.addEventListener('input', (ev) => {
  const currentValue = theInput.value;
  document.execCommand('undo');   // undo this change
  theInput.value = currentValue;  // ... but immediately reset the value
  // TODO: You might want to persist the selection position.

  pushNewUndoState(currentValue);  // ... our special state to keep
});
⚠️ This works well, but be careful with this approach! Unless you're sure that the user just changed the element you care about, you might be undoing some other user action on your page.

The undo keyboard shortcuts
Many examples of custom undo & redo on the web use keydown handlers to detect whether the user is entering Ctrl/Cmd-Z, and performing a special action. This usually works but has two challenges:

It doesn't capture undo and redo through a context menu, or through the browser's menu bar

It's not accessible: if a user has rebound the keys to something else, or uses an alternative input device to undo or redo

These two reasons are fundamentally why it's worth making the browser work for us—through our 'hidden' input.

Thanks
Thanks for reading! As I mentioned above, I've turned this knowledge into a class you can use in your own apps, but hopefully the idioms above are simple enough to apply directly within your own code too. Check the 'undoer' package out here ⤵️💻.

Ask me questions here or find me on Twitter.

Acknowlegements
Some icons from Icons8.com, used under CC BY-ND.
Emoji by Emojityper.
👋 Before you go

Do your career a favor. Join DEV. (The website you're on right now)

It takes one minute, it's free, and is worth it for your career.

Get started

Top comments (4)
Subscribe
pic
Add to the discussion
 
 
rodneyrehm profile image
Rodney Rehm
•
Apr 24 '18 • Edited on Apr 24

Q: This input might confuse accessible user-agents. Please leave me a comment if you have ideas on how to solve this for screen readers etc!

I'd expect adding aria-hidden="true" would complement your efforts to avoid keyboard focus and effectively hide the element from screen readers.

We focus on the undoer, but this is prevented by the event handler we set up initially

That's not quite correct as the element receives focus for a very brief time. For visually abled users shifting focus back to the element that had focus before undoer briefly got it, will likely be unobservable, except maybe for the cursor position to change.

However, for users relying on screen readers this may cause an audible indication of focus having been shifted, even though it was shifted back to where it was before. Things may get worse than that if you're dealing with a situation where "nothing has focus" (document.activeElement === document.body). It's pretty likely that the screen reader's "reading position" follows to the focused element, essentially resetting their whereabouts on every pushNewUndoState().


3
 likes
Like
Reply
 
 
krusadercell profile image
KrusaderCell
•
Apr 26 '18

Nice article. I have one question, though. Why are you using splice in this._stack.splice(nextID, this._stack.length - nextID, data); and not push i.e. this._stack.push(data);? For me it's seems way more complicated to do all that in order to only add new element as the last element of the Array.


1
 like
Like
Reply
 
 
samthor profile image
Sam Thorogood 
•
Apr 26 '18

Good question!

It's subtle but we actually want to remove all elements after nextID.

Let's say I do three actions.. 1, 2, 3. I now have three (well four, if you include initial state) states on my stack.

If I undo two of those (3 and 2), my current state will be action 1. But I'm able to redo those two by typing Ctrl-Shift-Z.

I'm also able do perform another action, which would invalidate those previous states, because I can no longer redo them. That's what the splice is doing—removing the rest of the stack and pushing a new state on.

I hope that explanation helps!


3
 likes
Like
Reply
 
 
donniedamato profile image
Donnie D'Amato
•
Apr 28 '18

I dived into this issue in another way using MutationObserver. Here's a codepen: codepen.io/fauxserious/pen/eEOMgr


1
 like
Like
Reply
Code of Conduct • Report abuse
profile
Auth0
PROMOTED

Auth0

Easy to implement, endless possibilities
With a few lines of code, you can have Auth0 by Okta integrated in any app written in any language and any framework. 🚀 Start building for free today.

Sign up now

Read next
afraazahmed profile image
Data types in Python
Afraaz Ahmed - Jun 18

caresle profile image
Food tracker app (Phase 1/?) for show how you split your money
Carlos Estrada - Jun 18

ujjwalkarn954 profile image
Adapting to DevOps: My Journey and Suggestions for Freshers
Ujjwal Kumar Karn - Jun 18

jottyjohn profile image
Artificial Intelligence in the World of Agile
Jotty John - Jun 18


Google Web Dev
Follow
Trending on DEV Community 
Ben Halpern profile image
Meme Monday
#discuss #watercooler #jokes
CodingNepal profile image
How to Test Local Website on Mobile Devices
#webdev #coding #productivity #beginners
profile
AWS
PROMOTED

Build On AWS Stream

Get a wealth of knowledge from AWS data experts
Dig in on data questions with expert advice

Let’s Talk About Data is an information gold mine for data professionals looking for the latest news and guidance on AWS Data & Analytics services and partners.

Learn More

let duringInput = false;
const undoStack = [{x: 1, y: 1}];  // we have to start with our initial state
function pushNewUndoState(data) {
  // remove states past now, add our new state
  const nextStateId = +undoer.value + 1;
  undoStack.splice(nextStateId, undoStack.length - nextStateId, data);

  duringInput = true;

  // focus and "type" the next number
  undoer.focus();
  document.execCommand('selectAll');
  document.execCommand('insertText', false, nextStateId);

  duringInput = false;
}