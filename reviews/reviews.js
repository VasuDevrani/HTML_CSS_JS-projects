const persons=[
    {
        name: "Vasu Devrani",
        img: "best.jpg",
        text: "“Leadership and learning are indispensable of each other, Get more from your people through game-changing bespoke training."
    },
    
    {
        name: "Rahul Upadhyay",
        img: "Jonathan.png",
        text: "“I gained so much more knowledge than I thought I would."
    },

    {
        name: "Aman Hussain",
        img: "David-PSD-01.png",
        text: "Sometimes I lack confidence in my abilities, however I now see that I’m able to achieve new things."
    },

    {
        name:"Jonathan, Junior",
        img:"Emma.png",
        text:"“It doesn’t matter how much experience you have with a computer, anyone can learn. I’m amazed at what I can do now.”"
    }
]

let prev=document.querySelector('.btn1');
let next=document.querySelector('.btn');
let random=document.querySelector('.btn_n');

let name1=document.querySelector('.revname');
let des=document.querySelector('p');
let image=document.querySelector('img');

var p=0;

prev.addEventListener('click',function(){
    p--;
    if(p<0)
    {
        p=3;
    }
    var display=persons[p];
    name1.innerHTML=display.name;
    des.innerHTML=display.text;
    image.src=display.img;
});

next.addEventListener('click',function(){
    p++;
    if(p>3)
    {
        p=0;
    }
    var display=persons[p];
    name1.innerHTML=display.name;
    des.innerHTML=display.text;
    image.src=display.img;
});




