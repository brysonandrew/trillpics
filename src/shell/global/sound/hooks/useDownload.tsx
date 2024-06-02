export const useDownload = () => {
  const handler = (url: string) => {
    const a =
      document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "test.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window?.URL?.revokeObjectURL?.(
        url
      );
    }, 100);
  };

  return handler;
};
