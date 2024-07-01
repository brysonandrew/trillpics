export const renderMemory = (
  e: HTMLElement
) => {
  if (!(window.performance as any))
    return;
  e.innerText =
    "jsHeapSizeLimit: " +
    Math.round(
      (window.performance as any)
        .jsHeapSizeLimit /
        (1024 * 1024)
    ) +
    "MB\n" +
    "totalJSHeapSize: " +
    Math.round(
      (window.performance as any).memory
        .totalJSHeapSize /
        (1024 * 1024)
    ) +
    "MB\n" +
    "usedJSHeapSize:  " +
    Math.round(
      (window.performance as any).memory
        .usedJSHeapSize /
        (1024 * 1024)
    ) +
    "MB";
};
