function updateclock()
{
    let cTime=new Date();

    let cHours=cTime.getHours();
    let cMin=cTime.getMinutes();
    let cSecond=cTime.getSeconds();

    let form=cHours<12 ? "AM" : "PM";
    cMin=cMin<10? "0":"" +cMin;
    cSecond=(cSecond<10? "0":"") +cSecond;
    if(cHours>12)
    {
        cHours=cHours-12;
    }
    cHours=(cHours<10? "0":"") +cHours;

    let time=cHours + ':' + cMin + ':' + cSecond + ':' + form;

    document.querySelector(".clock").innerHTML=`<span>${time}</span>`;

}