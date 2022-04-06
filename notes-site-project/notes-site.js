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
  let text=document.querySelector('#text'); //stores text from the text area as STRING 
  let notes=localStorage.getItem("notes");  //creates a local storage KEY

  if(notes==null)
  {
    notesObj=[];  //creates an ARRAY either empty 
  }
  else{
    notesObj=JSON.parse(notes);   //or with parsed(converted to character array) STRING from notes KEY of local storage
  }
  notesObj.push(text.value);   //pushes the new note in the ARRAY
  localStorage.setItem("notes",JSON.stringify(notesObj));  //the array with previous strings and the new text is put into the ARRAY
  text.value=""; 
  console.log(notesObj);  
   shownotes();  //this function displays the notes in local storage as new HTML ELEMENTS
});

// NOTES added

// Displaying the notes in local storage
function shownotes()
{
    let notess=localStorage.getItem("notes");   //takes the string from the local storage
    if(notess==null)
    {
      notesObj=[];
    }
    else
    {
      notesObj=JSON.parse(notess);   //converts the ',' separated strings in the main string of notes KEY into separated array elements
    }
    let html='';
    notesObj.forEach(function(element,index){   //this creates a notes box for each element 
      html+= ` <div class="ynotes1">
      <div class="your-note">
        <h5>YOUR NOTE ${index+1}</h5>
        <textarea class="textarea1">${element}</textarea>
        <br>
        <button class="delete" id="${index}" onclick="deleteNote(this.id)">DELETE</button> 
      </div>
    </div>`;
    });
    //the onclick evenet listner must be added inside the above html string as it will get added to each new box

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