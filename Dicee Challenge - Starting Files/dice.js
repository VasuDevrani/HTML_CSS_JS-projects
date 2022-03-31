// For DICE one

let randomNumber=Math.floor(Math.random()*6)+1;  //generating the random number

let randomImg= "dice"+ randomNumber+ ".png";  //generates the new random image

let randomImgSrc="images/"+randomImg;   //generates the source of random image

let dice1=document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomImgSrc);

// for DICE two

let randomNumber1=Math.floor(Math.random()*6)+1;  //generating the random number

let randomImg1= "dice"+ randomNumber1+ ".png";  //generates the new random image

let randomImgSrc1="images/"+randomImg1;   //generates the source of random image

let dice2=document.querySelectorAll("img")[1];

dice2.setAttribute("src",randomImgSrc1);


// for WINNER selection

if(randomNumber>randomNumber1)
{
    var head1=document.querySelector('h1');
    head1.innerHTML="Player 1 won!!";
}
else if(randomNumber<randomNumber1)
{
    var head1=document.querySelector('h1');
    head1.innerHTML="Player 2 won!!";
}
else
{
    var head1=document.querySelector('h1');
    head1.innerHTML="Draw, Play again!!";
}
