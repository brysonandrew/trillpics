export const DETAIL_EXAMPLE = {
  loc: [
    'body',
    'batch',
    'graph',
    'nodes',
    'metadata_accumulator',
    'MetadataAccumulatorInvocation',
    't2iAdapters',
  ],
  msg: 'field required',
  type: 'value_error.missing',
};

export type TErrorDetail =
  typeof DETAIL_EXAMPLE;

export type TErrorDetailResult = {
  detail: TErrorDetail[];
};
