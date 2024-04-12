import { trpc } from "@/utils/trpc";
import { Footer } from "@pages/home/footer";
import { List } from "./pics";
/**
 * This is the client-side code that uses the inferred types from the server
 */
/**
 * We only import the `TAppRouter` type from the server - this is not available at runtime
 */

// Initialize the tRPC client
// const trpc = createTRPCProxyClient<TAppRouter>({
//   links: [
//     httpBatchLink({
//       url: 'http://localhost:3000',
//     }),
//   ],
// });

// Call procedure functions

// 💡 Tip, try to:
// - hover any types below to see the inferred types
// - Cmd/Ctrl+click on any function to jump to the definition
// - Rename any variable and see it reflected across both frontend and backend

const Home = () => {
  const hi  =trpc.hi.useQuery();
  console.log(hi)
  // const [queryClient] = useState(
  //   () => new QueryClient()
  // );
  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     url: "http://localhost:3000/trpc",
  //   })
  // );

  // console.log(queryClient,trpcClient)
  // useEffect(() => {
  //   const x = async () => {
  //     const users =
  //       await trpc.hello.query();
  //     //    ^?
  //     console.log("Users:", users);

  //     const createdUser =
  //       await trpc.goodbye.mutate();
  //     //    ^?
  //     console.log(
  //       "Created user:",
  //       createdUser
  //     );
  //   };
  //   x();
  // }, []);

  return (
    <>
      <List />
      <Footer />
    </>
    // <trpc.Provider
    //   client={trpcClient}
    //   queryClient={queryClient}
    // >
    //   <QueryClientProvider
    //     client={queryClient}
    //   >

    //   </QueryClientProvider>
    // </trpc.Provider>
  );
};
// const Home = trpc.withTRPC(_Home);
export { Home };
