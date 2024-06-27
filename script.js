const characters = [
    "A", "B", "C", "D", "E", "F", "G"
    , "H", "I", "J", "K", "L", "M", "N",
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
    "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "!", "@", "#", "$", "%", "&",
    "*", "_", "-", "+", "=", "{", "[", "}", "]", "|", "?", "/"
];

const inp1 = document.querySelector(".btn1");
const inp2 = document.querySelector(".btn2");
function getRandomPass1() {
    let pass1 = ""
    for (let i = 0; i < 15; i++) {

        let index = Math.floor(Math.random() * characters.length)
        pass1 += characters[index];

    }
    return pass1;
}
function getRandomPass2() {
    let pass2 = " "

    for (let i = 0; i < 15; i++) {

        let index = Math.floor(Math.random() * characters.length)
        pass2 += characters[index];

    }
    return pass2;
}

function generate_passwords() {
    let check = false;
    let pass1=getRandomPass1()
    let pass2 = getRandomPass2();
    inp1.textContent = pass1;
    inp2.textContent = pass2;
    inp1.addEventListener('click', () => {
        navigator.clipboard.writeText(pass1);
        check = true;
        inp1.textContent = "Copied!";
        inp2.textContent=pass2;
    }
    )
    inp2.addEventListener("click", () => {
        navigator.clipboard.writeText(pass2);
        if (check) {
            inp2.textContent = "Copied!";
            inp1.textContent=pass1;
            check=false
        }
        else{
            inp2.textContent=pass2;
            check=true;
        }
    })





}






















