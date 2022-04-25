const app=document.querySelector(".app"); //wrapper
let inputweather=document.querySelector(".input-weather"); //inputpart
let cityname=document.querySelector(".city-name"); //inputfield
let info=document.querySelector(".info"); //infotext
let button=document.querySelector(".location-input"); //locationbtn

let outputweather=document.querySelector(".output-weather"); //weatherpart
let iconweather=document.querySelector(".image"); //wIcon
let backIcon=document.querySelector(".backicon"); //arrowback
let api;
let apiKey='d6cb667b9eaec407f9a0d5d4546c44d4';

// Requesting api by input field
cityname.addEventListener("keyup",(e)=>{
    if(e.key=="Enter" && cityname.field!="")
    {
        requestApi(cityname.value);
    }
})

// Requesting api by location button
button.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
        else
        {
            alert("Browser does'nt support geolocation api");
        }
});

function requestApi(city)
{
   api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   console.log(api);
   fetchData();
}

function onSuccess(position)
{
    const{latitude,longitude}=position.coords;
    api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    console.log(api);
    fetchData();
}

function onError(error)
{
    info.innerText=error.message;
    info.classList.add("info-error");
}

// Fetching the data from api
function fetchData(){
    info.innerText="Getting weather details...";
    info.classList.add("info-good");
    fetch(api).then(response=>{
        console.log(response);
        return response.json();
    })
    .then(result=>{
        weatherDetails(result);
    })
    .catch(()=>{
        info.innerText="Something went wrong";
        info.classList.replace("info-good","info-error");
    })
}

// Updating weather details
function weatherDetails(inf){
   if(inf.cod=="404")
   {
       inf.classList.replace("info-good","info-error");
       inf.innerText=`${cityname.value} isn't a valid city name`;
   }
   else{
    inputweather.classList.add("active");
    outputweather.classList.remove("active");
       const city=inf.name;
       const country=inf.sys.country;
       const {description,id}=inf.weather[0];
       const {temp,feels_like,humidity}=inf.main;

   if(id==800)
   {
       iconweather.src="/Weather Icons/clear.svg";
   }
   else if(id>=200 && id<=232)
   {
       iconweather.src="/Weather Icons/storm.svg";
   }
   else if(id>=600 && id<=622)
   {
       iconweather.src="/Weather Icons/snow.svg";
   }
   else if(id>=701 && id<=781)
   {
       iconweather.src="/Weather Icons/haze.svg";
   }
   else if(id>=801 && id<=804)
   {
       iconweather.src="/Weather Icons/cloud.svg";
   }
   else if(id>=500 && id<=531)
   {
       iconweather.src="/Weather Icons/rain.svg";
   } 

   outputweather.querySelector(".extra-temp").innerText=Math.floor(feels_like-273.15);
   outputweather.querySelector(".temp").innerText=Math.floor(temp-273.15)+`°C`;
   outputweather.querySelector(".weat").innerText=description;
   outputweather.querySelector(".location").innerText=`${city},${country}`;
   outputweather.querySelector(".extra-percent").innerText=`${humidity}`;
   info.classList.remove("info-good","error");
   info.innerText="";
   cityname.value="";
   app.classList.add(".active")
}
}

backIcon.addEventListener("click",()=>{
    inputweather.classList.remove("active");
    outputweather.classList.add("active");
})
