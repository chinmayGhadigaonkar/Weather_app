const Search_cityName = document.getElementById("Search-cityName")
const btn = document.getElementById("getInfo")
const cityname = document.getElementById("name-City");
const weatherDec=document.getElementById("weather-des")
const Country_name = document.getElementById("Country-name")
const temp1 = document.getElementById("temp")


const humidtyvar = document.getElementById("humidty")
const WS = document.getElementById("WS")
const wd = document.getElementById("w-d")
const vsi = document.getElementById("vsi")
const tempmax1 = document.getElementById("tempmax")
const tempmin1 = document.getElementById("tempmin")





const getData = async (event) => {
    event.preventDefault();
    const cityvar = Search_cityName.value;
    console.log(cityvar)
    if (cityvar === "") {
        console.log("Plz enter your city name")
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvar}&appid=4c71ee8b8688a6bdb6939d64b8e4ed87&units=metric`;
            console.log(cityvar);
            const response = await fetch(url, {
                method: "GET"
            })
            console.log(response);
            const data = await response.json();
            console.log(data);
            const { name } = data;
            const { sys } = data;
            const { main } = data;
            const { wind } = data;
            const { visibility } = data;
            const {weather}=data
            

            cityname.innerText = name;
            Country_name.innerHTML = sys.country;
            weatherDec.innerHTML=weather[0].description;
            temp1.innerHTML = main.temp;






            humidtyvar.innerHTML = main.humidity;
            WS.innerHTML = wind.speed;
           vsi.innerText = visibility;
            wd.innerHTML = wind.deg;
            tempmax1.innerHTML = main.temp_max;
            tempmin1.innerHTML = main.temp_min;

            if(weather[0].description.find("Clouds")===true){
                
            }

            console.log(weather[1].main);
        }
        catch {
            console.log("Plz enter your city name")
        }
    }





}

btn.addEventListener("click", getData);



// feels_like
// :
// 25.79
// humidity
// :
// 53
// pressure
// :
// 1016
// temp
// :
// 25.77
// temp_max
// :
// 25.96
// temp_min
// :
// 24.16