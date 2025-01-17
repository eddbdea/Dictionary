const words = [];

function saveWord() {
    const getWord = document.getElementById('word').value;
    if (words.length) {
        if (words.includes(getWord)) {
            alert('The word is already saved');
        } else {
            words.push(getWord);
        }
    } else {
        words.push(getWord);
    }
    document.getElementById('word').value = '';
}

function searchWord() {
    const wordSearch = document.getElementById('word').value;
    let index = words.indexOf(wordSearch);
    if (index === -1) {
        alert('The searched word was not found!');
    } else {
        alert('The searched word was found!');
    }
    document.getElementById('word').value = '';
}

function allowOnlyLetters(event) {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (!/[A-Za-z]/.test(char)) {
        event.preventDefault(); 
    }
}