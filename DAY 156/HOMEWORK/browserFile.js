<input type="file" id="fileInput">
<script>
  const input = document.getElementById("fileInput");

  input.addEventListener("change", function () {
    const file = input.files[0];
    console.log("Selected file:", file.name, file.size);
  });
</script>
