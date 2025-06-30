const reader = new FileReader();
reader.onload = function () {
  console.log("File content:", reader.result);
};
reader.readAsText(file);
