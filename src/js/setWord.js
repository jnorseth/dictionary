
document.getElementById('setWord').addEventListener('click', setWord);

export function setWord() {

    let word = document.getElementById('word').value;               //  word input
    try {
        if (!word) {
            throw new SyntaxError("Please enter a word.");
        }
        
    } catch (err) {
        alert(err.message);
        return;
    }
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
    .then((response) => {
        // 1. check response.ok
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response); // 2. reject instead of throw
      })
        .then(json => showWords(json))
        .catch((response) => {
            console.log(response.status);
            try{
            if (response.status == 404) {
                throw new Error("That word is not contained in my dictionary, please try again.")
            }
        }catch (err) {
                alert(err.message);
                return;
            }
        });
    
        
}



export function showWords(words) {


    let card = document.getElementById('word-detail');
    let row = '';
    row += `<div class="word">
    <h1 class="highlight"><b>${words.word}</b></h1>
    <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pronounciation: <em>${words.pronunciation.all}</em> &nbsp;&nbsp;syllables: ${words.syllables.count}</h4>
    <h3>Definitions:</h3>
    </div>
    <div class= definitionCards>`;
    words.results.forEach((word) => {
        if (word.synonyms === undefined) word.synonyms = [];
        let synonyms = '<ul>';
        word.synonyms.forEach(s => synonyms += `<li>${s}</li>`);
        synonyms += '</ul>';
        row += `<ul>
                    <div  class="card">
                    <li>${word.definition}</li>
                    <h4>Synonymns:</h4>
                    <li>${synonyms}</li></div>
                </ul>`
    });
    row += '</div>'
    card.innerHTML = row;

}




