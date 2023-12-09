import { InlineEntries } from '@components/layout/InlinePairs';
import { useResults } from '../context';

export const Paging = () => {
  const {
    results: { length: resultsCount },
  } = useResults();

  const ENTRIES = [
    ['showing', resultsCount] as const,
  ];

  return (
    <InlineEntries entries={ENTRIES} />
  );
};
