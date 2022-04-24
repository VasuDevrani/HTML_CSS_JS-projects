let btn=document.querySelector(".button");
let video=document.querySelector(".video-cont");
let mover=document.querySelector(".mover");
let preloader=document.querySelector(".preloader");

mover.addEventListener("click",()=>{
    if(video.paused)
    {
        console.log("video is paused");
        video.play();
        mover.classList.add('trans');
        btn.style.backgroundColor="white";
        mover.style.backgroundColor="black";
    }
    else
    {
        console.log("video is not paused");
        video.pause();
        mover.classList.remove('trans');
        btn.style.backgroundColor="black";
        mover.style.backgroundColor="white";
    }
});

window.addEventListener("load",()=>{
    preloader.style.display="none";
    console.log("hello");
})