const city_name = document.getElementById("cityname");
const submit_Btn = document.getElementById("submitBtn");
const Citynam_Display = document.getElementById("city_name")
const temp1 = document.getElementById("temp")
const day = document.getElementById("day")
const today_data = document.getElementById("today_data")
const temp_Status =document.getElementById("temp_Status")


const getData = async (event) => {
    // alert("hiiiiiiii")
    event.preventDefault();
    const cityval = city_name.value;
    if (cityval === "") {

        Citynam_Display.innerText = 'plz write the name before search';

    }
    else {
        try {
            // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=4c71ee8b8688a6bdb6939d64b8e4ed87 &units=metric`;
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=4c71ee8b8688a6bdb6939d64b8e4ed87&units=metric`;

            console.log(cityval);
            const response = await fetch(url, {
                method: "GET"
            });

            const data = await response.json();
            console.log(data);
            
            const { main } = data;

            const { sys } = data;
            const { name } = data
            console.log(main.temp);
            //  const arrdata = [data]
            //  console.log(arrdata);

            temp1.innerText = main.temp;   
            today_data.innerText = sys.country;
            day.innerHTML = name;
            console.log(data.weather[0].main);
            if(data.weather[0].main==="Haze"){
                temp_Status.innerHTML= `<i class="fa-solid fa-sun-haze" style="color: Black;"></i>`;

            }
            else if(datadata.weather[0].main==="smoke"){
                temp_Status.innerHTML= `<i class="fa-solid fa-smoke" style="color: #007cff;"></i>`;
            }
            else if(datadata.weather[0].main==="Clouds"){
                temp_Status.innerHTML= `<i class="fa-solid fa-clouds "style="color: #007cff;"></i>  `;
            }
            else if(datadata.weather[0].main==="Clear"){
                temp_Status.innerHTML= `  <i class="fa-duotone fa-cloud-sun  "style="color: Black;"></i> `;
            }
        }
        catch {
            Citynam_Display.innerText = 'plz write the name before search';
        }

    }

}

submit_Btn.addEventListener("click", getData);

{/* <i class="fa-solid fa-smoke"></i> */}

{/* <i class="fa-solid fa-sun-haze"></i> */}
{/* <i class="fa-solid fa-cloud"></i> */}