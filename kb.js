let secretKey, outputList;
const getRandomLetter = () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(Math.random() * 26)];
const handleKeyPress = (event) => {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey === secretKey) {
        document.body.appendChild(document.createElement('h2')).textContent = `SECRET KEY PRESSED ( ${pressedKey} )`;
        secretKey = getRandomLetter();
    }
};
document.body.appendChild(document.createElement('h1')).textContent = 'Guess the Secret Letter!';
outputList = document.body.appendChild(document.createElement('ol'));
document.body.addEventListener('keydown', handleKeyPress);
secretKey = getRandomLetter();