import { TChildren } from '@brysonandrew/config-types';

type TEntry = readonly [
  string,
  TChildren | number,
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
