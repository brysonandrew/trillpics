export const downloadMedia = async (
  media: Blob | MediaSource
) => {
  const urlCreator =
    window.URL || window.webkitURL;
  const imageUrl =
    urlCreator.createObjectURL(media);
  const tag =
    document.createElement("a");
  tag.href = imageUrl;
  tag.target = "_blank";
  tag.download = "sample.mp4";
  document.body.appendChild(tag);
  tag.click();
  document.body.removeChild(tag);
};
export const downloadXhr = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://via.placeholder.com/150",
    true
  );
  xhr.responseType = "blob";
  xhr.onload = function () {
    downloadMedia(this.response);
  };
  xhr.onerror = (err) => {
    alert("Failed to download picture");
  };
  xhr.send();
};
