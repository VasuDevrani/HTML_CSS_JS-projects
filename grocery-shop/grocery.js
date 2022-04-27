let input = document.querySelector(".write");
let button = document.querySelector(".submit");
let output = document.querySelector(".output-area");
let items = document.querySelector(".items");

let aler = document.querySelector(".alert");

showitems();
button.addEventListener("click", () => {
  if (input.value === "") {
    console.log("hello");
    aler.classList.remove("none");
  } else {
    if (!aler.classList.contains("none")) aler.classList.add("none");
    let stuffObj;

    let stuff = localStorage.getItem("stuff");
    if (stuff == null) {
      stuffObj = [];
    } else {
      stuffObj = JSON.parse(stuff);
    }

    stuffObj.push(input.value);

    localStorage.setItem("stuff", JSON.stringify(stuffObj));
    input.value = "";
    showitems();
  }
});

function showitems() {
  let stuff = localStorage.getItem("stuff");
  let stuffObj;
  if (stuff == null) {
    stuffObj = [];
  } else {
    stuffObj = JSON.parse(stuff);
  }

  let html = "";
  stuffObj.forEach((element,index) => {
    html += `<div class="item">
        <p class="items" style="margin:0;">${element}</p>
        <button class="remove" id="${index}" onclick="deleteitem(this.id)">R</button> 
    </div>`;
  });

  output.innerHTML = html;
}
let remove = document.querySelectorAll(".remove");


function deleteitem(id){
    let stuff = localStorage.getItem("stuff");
    console.log("delete", id);
    if (stuff == null) {
      stuffObj = [];
    } else {
      stuffObj = JSON.parse(stuff);
    }
    stuffObj.splice(id, 1);
    localStorage.setItem("stuff", JSON.stringify(stuffObj));
    showitems();
};
