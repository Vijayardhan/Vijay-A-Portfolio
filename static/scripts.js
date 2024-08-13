document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let words = document.querySelectorAll(".word");
    words.forEach(word => {
        let letters = word.textContent.split("");
        word.textContent = "";
        letters.forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let rotateText = () => {
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
        
        // Animate out letters of current word
        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });
        
        // Reveal and animate in letters of next word
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
        
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    setInterval(rotateText, 4000);
});

function showNote() {
    alert("Currently Working");
}



let currentProject = 1;

document.getElementById('prev-project').addEventListener('click', () => {
    if (currentProject > 1) {
        document.getElementById(`project-${currentProject}`).style.display = 'none';
        currentProject--;
        document.getElementById(`project-${currentProject}`).style.display = 'flex';
    }
});

document.getElementById('next-project').addEventListener('click', () => {
    if (currentProject < 3) { // Update this number to reflect the total number of projects
        document.getElementById(`project-${currentProject}`).style.display = 'none';
        currentProject++;
        document.getElementById(`project-${currentProject}`).style.display = 'flex';
    }
});








