// NAV BAR
let side=document.querySelector('.sidepanel');
let button=document.querySelector('.icon');

button.addEventListener('click',function(){
if(side.style.display!='none')
    {
      side.style.display='none';
    }
    else{
      side.style.display='inline';
    }
});

// NAV BAR ends

// ADDING TEXT in local storage

let addbtn=document.querySelector('.addbtn');
shownotes();

addbtn.addEventListener("click", function(e){
  let text=document.querySelector('#text');
  let notes=localStorage.getItem("notes");

  if(notes==null)
  {
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(notes);
  }
  notesObj.push(text.value);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  text.value="";
  console.log(notesObj);
   shownotes();
});

// NOTES added

// Displaying the notes in local storage
function shownotes()
{
    let notess=localStorage.getItem("notes");
    if(notess==null)
    {
      notesObj=[];
    }
    else
    {
      notesObj=JSON.parse(notess);
    }
    let html='';
    notesObj.forEach(function(element,index){
      html+= ` <div class="ynotes1">
      <div class="your-note">
        <h5>YOUR NOTE ${index+1}</h5>
        <textarea class="textarea1">${element}</textarea>
        <br>
        <button class="delete" id="${index}" onclick="deleteNote(this.id)">DELETE</button>
      </div>
    </div>`;
    });
    
    let notesElm=document.querySelector('.ynotes');
    if(notesObj.length!=0)
    {notesElm.innerHTML=html;
    }
    else
    {
      notesElm.innerHTML=`<p><b style="font-size:20px; width:60%;">Nothing to display!!
       Go ADD some fresh NOTESSS</b></pre>`;
    }
  };
// NOTES displayed

// DELETING the notes
  //  let delbtn=document.getElementsByClassName('delete');

  //  delbtn.addEventListener("click",function(){
  //    deleteNote(this.id);
  //  })

function deleteNote(index)
{
  let notess=localStorage.getItem("notes");
  console.log("delete",index);
  if(notess==null)
  {
    notesObj=[];
  }
  else
  {
    notesObj=JSON.parse(notess);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  shownotes();
}