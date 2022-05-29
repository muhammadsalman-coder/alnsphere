export const saveFileAs = (data, fileName) => {
  // Creates a Blob:
  // https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
  const blob = new Blob([data], { type: "octect/stream" });
  // creates a url that points to the file in the browsers memory
  const url = URL.createObjectURL(blob);
  console.log(url);

  // using an 'a' tag to trigger a download
  // browsers don't have a nice api for this
  const anchor = document.createElement("a");
  anchor.setAttribute("href", url);
  anchor.setAttribute("download", fileName);
  anchor.click();
  // revoke url after using it
  URL.revokeObjectURL(url);
};
