
// import { setLocalStorage } from './utils'

document.getElementById('setWord').addEventListener('click', setWord);


export function setWord() {
    let word       = document.getElementById('word').value;               //  word input
    // setLocalStorage("word",word);
     let url = `/word-details.html?word=${word}`
    // document.querySelector('.define').innerHTML = url
    window.location.replace(url);
}
