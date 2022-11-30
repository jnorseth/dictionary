

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
        .catch(err => console.error('error:' + err))

}

function showWords(words) {
    let tableBody = document.getElementById('bookList');
    let row = '';
    words.results.forEach((word,idx) => {
        if (word.synonyms === undefined)    word.synonyms = [];
        let synonyms = '<ul>';
        word.synonyms.forEach(s => synonyms += `<li>${s}</li>`);
        synonyms += '</ul>';
        row += `<tr class="w3-theme-${idx%2>0?'l2':'l3'}">
                    <td>${word.definition}</td>
                    <td>${synonyms}</td>
                </tr>`
            });
    tableBody.innerHTML = row;
}