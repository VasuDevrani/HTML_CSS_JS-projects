let box=document.querySelectorAll(".box");

let main=document.getElementsByClassName("class1");
let subs=document.getElementsByClassName("class2");
let modal=document.querySelector(".modal");
let back=document.querySelector('.cross');

Array.from(box).forEach((element,index) => {
    element.addEventListener("click",()=>{
        console.log(index,"is clicked"); 
        
        document.body.style.background="black";

        if(index===0)
        {
            subs[0].style.display='block';
            main[0].style.display='none';
            modal.style.backgroundImage = "url('man1.jpg')";
        }
        else if(index===1)
        {
           modal.style.backgroundImage = "url('man2.jpg')";
            subs[0].style.display='block';
            main[0].style.display='none';
        }
        else if(index===2)
        {
            modal.style.backgroundImage = "url('man3.jpg')";
            subs[0].style.display='block';
            main[0].style.display='none';
        }
        document.querySelector("h1").style.color="white";
        document.querySelector("h1").textContent=`Modal ${index+1}`;
})});

back.addEventListener("click",()=>{
    subs[0].style.display='none ';
    main[0].style.display='block';
    document.body.style.background=`linear-gradient(
        90deg,
        rgba(200, 3, 63, 1) 22%,
        rgba(0, 212, 255, 1) 84%
       
      )`;
      document.querySelector("h1").style.color="black";
      document.querySelector("h1").textContent=`MEN'S WEAR`;

})
