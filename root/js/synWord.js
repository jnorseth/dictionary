
// let syn = document.getElementById('synWord')
// if(syn){
//   syn.addEventListener('click', swapper, false);
// }
// document.getElementById('synWord').addEventListener('click', synWord)

export function synWord() {
    
    let word       = document.getElementById('word').value;               //  word input

    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
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
        .then(json => showWords(json))       
        .catch(err => console.error('error:' + err));

        fetch(url, options)  
        .then((response) => response.text())
        .then((responseText) => {
             console.log(JSON.parse(responseText));
        })
        .catch((error) => {
             console.log("reset client error-------",error);
        });
    }
