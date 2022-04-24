let ques=document.querySelectorAll(".ques");
let sub=document.querySelectorAll(".sub");
let btn=document.querySelectorAll(".icoon");
let subarr=Array.from(sub);
let btnarr=Array.from(btn);
let quesarr=Array.from(ques);


Array.from(btn).forEach((e,i) => {
    btn[i].addEventListener("click",()=>{
        
        if(subarr[i].style.display!="block"){
        console.log(`btn[${i}] is clicked`);
        subarr[i].style.display="block";
        btnarr[i].classList.add("btnRotate");
        quesarr[i].classList.remove('margin');
        for(let j=0;j<3;j++)
        {
            if(j!=i)
            {
                subarr[j].style.display="none";
                btnarr[j].classList.remove("btnRotate");
                quesarr[j].classList.add('margin');
            }
        }

        
        }

        else{
            subarr[i].style.display="none";
            btnarr[i].classList.remove("btnRotate");
            quesarr[i].classList.add('margin');
        }
    })
});