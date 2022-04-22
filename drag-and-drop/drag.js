let cont = document.querySelector(".container");
let btn = document.querySelector(".browse");
let header = document.querySelector("h2");
let inputFile = document.querySelector(".in");
let file;

cont.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("The pic is above conatiner");
  header.innerText = "Release to drop";
  cont.classList.add("border");
});

btn.addEventListener("click", () => {
  inputFile.click();
});

inputFile.addEventListener("change", () => {
  file = this.files[0];
  showfile();
});

cont.addEventListener("dragleave", () => {
  console.log("The pic left the container");
  header.innerText = "Drag and drop the file";
  cont.classList.remove("border");
});
cont.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("the file was dropped");
  cont.classList.add("border");

  file = e.dataTransfer.files[0];
  showfile();
});

function showfile() {
  let fileType = file.type;
  console.log(fileType);

  let isValid = ["image/jpg", "image/jpeg", "image/png"];

  if (isValid.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let image = `<img src="${fileURL}" alt="file">`;
      cont.innerHTML = image;
    };

    fileReader.readAsDataURL(file);
  } else {
    alert("The file format is not valid");
    console.log("Invalid file format");
  }
}
