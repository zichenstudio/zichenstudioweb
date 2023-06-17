let keyDown, inputLetter;
let typeNumberGood = 0, typeNumberBad = 0;

function keyboardInput() {
    document.addEventListener("keydown", function (event) {
        keyDown = event.key;
        type();
    });
}

function getLetter() {
    const letter = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ];
    let randomNumber = Math.floor(Math.random() * 26);
    inputLetter = letter[randomNumber];
    document.getElementById('daZiText').textContent = inputLetter;
}

function type() {
    if (keyDown === document.getElementById('daZiText').textContent) {
        getLetter();
        type();
        document.getElementById('daZiText').style.color = '#00FF00';
        setTimeout(function () {
            document.getElementById('daZiText').style.color = '';
        }, 100);
        typeNumberGood++;
        document.getElementById('typeNumberGood').textContent = typeNumberGood;
    } else {
    // 这里有个BUG
    // keyDown === document.getElementById('daZiText').textContent为true时，仍会运行else下代码
        document.getElementById('daZiText').style.color = '#FF0000';
        setTimeout(function () {
            document.getElementById('daZiText').style.color = '';
        }, 100);
        typeNumberBad++;
        // 使用typeNumberBad - typeNumberGood变相修复BUG
        document.getElementById('typeNumberBad').textContent = typeNumberBad - typeNumberGood;
    };
    keyDown = null;
}

getLetter();
keyboardInput();

