import { callApi } from "./call-api";

// export const canUpdateDefaultProps = (compositionId, readOnlyStudio) => {
//   if (readOnlyStudio) {
//       return Promise.resolve({
//           canUpdate: false,
//           reason: 'Read-only studio',
//       });
//   }
//   return callApi('/api/can-update-default-props', {
//       compositionId,
//   });
// };