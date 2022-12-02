// import { synWord} from "./synWord";


document.getElementById('setWord').addEventListener('click', setWord);

export function setWord() {
    
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
  

export function renderWord(words){
        let header = document.getElementById('word-header');
    let topWord = '';
    // words.syllables.forEach((word) => {
    //     let list = `<p>`;
    //     word.list.forEach(l => list += `<em>${l}</em>`);
    //     list += '</p>';
        topWord =+ `<h1>${word.word}</h1>`
    header.innerHTML = topWord;
}

export function showWords(words) {
    // let header = document.getElementById('word-header');
    // let h1 = '';
    // words.syllables.forEach((word) => {
    //     let list = `<p>`;
    //     word.list.forEach(l => list += `<em>${l}</em>`);
    //     list += '</p>';
    //     h1 =+ `<h1>${word}</h1>
    //     <h2>${word.pronunciation}</h2>
    //     <br>${list}`
    // })
    // header.innerHTML = h1;

    let card = document.getElementById('word-detail');
    let row = '';
    row += `<div class="word">
    <h1>${words.word}</h1>
    <h4>pronounciation: <em>${words.pronunciation.all}</em> &nbsp;&nbsp;syllables: ${words.syllables.count}</h4>
    <h3>Definitions:</h3>
    </div>
    <div class= definitionCards>`;
    words.results.forEach((word) => {
        if (word.synonyms === undefined)    word.synonyms = [];
        let synonyms = '<ul>';
        word.synonyms.forEach(s => synonyms += `<li>${s}</li>`);
        synonyms += '</ul>';
        row += `<ul>
                    <div class="card">
                    <li>${word.definition}</li>
                    <h4>Synonymns:</h4>
                    <li>${synonyms}</li></div>
                </ul>`
            });
    row += '</div>'
    card.innerHTML = row;
    
}


