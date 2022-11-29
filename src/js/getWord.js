    import fetch from 'node-fetch';
    import { getLocalStorage } from './utils';

//event listener for fetch
document.getElementById('getWord').addEventListener('click', getWord);

function getWord() {
    let wordDefinitions = document.getElementById('wordDefinitions');        //  definitons go here
    let word       = document.getElementById('word');               //  word input
    

    if (word.value.length === 0) {
        wordDefinitions.innerHTML = 'Please enter a word';
        return;
    }

    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}`;
    console.log(word);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84f67fb36dmsh8e88990056641a8p15b3d5jsn6b051431e6d3',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err))
        .then(words => {
            let innerHTML = "";
    let number = 0;
    for (let definition of definitions) {
        number++;
        innerHTML += 
        `<div class="grid-item">
        <h4>Definition: ${definition.number}</h4>
        
    </div>`;
    }
    wordList.innerHTML = innerHTML;
        });

}
// .then(weather => {                  //  with the resulting JSON data do something

//     //  If the city was entered extract weather based on the API
//     //  extract the interesting data from the JSON object and show it to the user
//     //  We will build the HTML to be inserted later.
//     //  The variable innerHTML will hold our work in progress
//     let innerHTML = "";
//     //  City API (forecast)
//     let color = 0;
//     for (let day of weather.list) {
//         color++;
//         //  let's build a nice card for each day of the weather data
//         //  this is a GREAT opportunity to Reactify this code. But for now I will keep it simple
//         innerHTML +=`
//         <div class="grid-item w3-theme-${(color%2)>0 ? 'l2':'d2'}">
//             <h4>Date: ${niceDate(day.dt, 0)} ${niceTime(day.dt, 0)}</h4>
//             <p>Forecast: ${day.weather[0].description} <img src='http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png' alt="" height="70%"></p>
//             <p>Wind at ${day.wind.speed.toFixed(0)} mph out of the ${windDirection(day.wind.deg)}</p>
//             <p>Sunrise: ${niceTime(weather.city.sunrise, 0)} / Sunset: ${niceTime(weather.city.sunset, 0)}</p>
//             <p>Temp: ${day.main.temp.toFixed(0)}</p>
//         </div>`;
//     }
//     //  and finally take the finished URL and stuff it into the web page
//     wordList.innerHTML = innerHTML;
//     city.value = weather.city.name;
// });
