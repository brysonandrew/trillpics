import { TChildren } from '@t/index';

type TEntry = readonly [
  string,
  TChildren,
];
type TEntries = TEntry[];
type TProps = {
  entries: TEntries;
};
export const InlineEntries = ({
  entries,
}: TProps) => {
  return (
    <ul className='row gap-4'>
      {entries.map(([title, value]) => (
        <li
          key={title}
          className='row gap-3'
        >
          <kbd className='text-gray-1'>
            {title}
          </kbd>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};
