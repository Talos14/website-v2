/* ===== Hero Typewriter Effect script stuff goes here ===== */

const texts = ["Hello!","নমস্কার!","Guten Tag!"];
const typingSpeed = 200;
const deletingSpeed = 75;
const delayBetweenTexts = 1000;
const delayAfterDelete = 500;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        el.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, delayAfterDelete);
            return;
        }
        setTimeout(type, deletingSpeed);
    }else{
        el.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenTexts);
            return;
        }
        setTimeout(type, typingSpeed)
    }
}

type();