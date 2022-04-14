let play=document.querySelector('#Play');
let end=document.querySelector('#End');
var audio=new Audio("Majhail.mp3");
let audiobox=document.querySelector('.audiobox');


play.addEventListener("click",function(){
    audio.play();
    audiobox.innerHTML=`<img src="musicpic.gif" alt="hh" class="scr"></img>`;
})

end.addEventListener("click",function(){
    audio.pause();
    audio.currentTime = 0;
    audiobox.innerHTML=`<h1>Play the song for FOOTER</h1>`
})

