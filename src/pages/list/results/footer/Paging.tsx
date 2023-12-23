import { InlineEntries } from '@components/layout/InlinePairs';
import { useResults } from '../context';

export const Paging = () => {
  const { size } = useResults();

  const ENTRIES = [
    ['showing', size] as const,
  ];

  return (
    <InlineEntries entries={ENTRIES} />
  );
};
