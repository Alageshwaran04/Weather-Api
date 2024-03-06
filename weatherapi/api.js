document.addEventListener("DOMContentLoaded",()=>{
    let cityInfo=document.getElementById("city_info")
    let searchBtn=document.getElementById("search_btn")
    let CityName=document.getElementById("CityName")
    let Temperature=document.getElementById("Temperature")
    let WeatherDescription=document.getElementById("Weather_Description")

    searchBtn.addEventListener("click",()=>{
        let city=cityInfo.value;
        if(city){
            getWeatherInfo(city)
        }else{
            alert("please enter your city name")
        }
    })

    async function getWeatherInfo(city){
        let apiKey="09a0957142861dfc608f65b0576d49b2";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try{
            let response=await fetch(apiUrl)
            console.log(response)
            let data=await response.json()
            console.log(data)
            if (data.cod ===200) {
               CityName.innerHTML=`weather in ${data.name},${data.sys.country}`
               Temperature.innerHTML=`Temperature in ${data.name},${data.main.temp}°C`
               WeatherDescription.innerHTML=`weather description is ${data.name},${data.weather[0].description}`
            }else{
                alert("city is not found")
                window.location.reload()
            }
        }catch(error){
            alert("some error occured into api",error)
            console.log("some error occurred into api",error)
        }
        
        
    }

})