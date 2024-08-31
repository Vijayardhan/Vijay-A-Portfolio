document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function toggleMenu(hamburger) {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('open');
}



// Home section

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






//about

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const aboutSection = document.querySelector('#about .about-container');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
});




//about extend

document.addEventListener('DOMContentLoaded', () => {
    const leftBox = document.querySelector('.left-box');
    const rightBox = document.querySelector('.right-box');
    const aboutExtend = document.querySelector('#about-extend');

    // Define the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                leftBox.classList.add('animate-left');
                rightBox.classList.add('animate-right');
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold as needed
    });

    // Start observing the #about-extend section
    observer.observe(aboutExtend);
});


// skills

document.addEventListener('DOMContentLoaded', () => {
    const skillBoxes = document.querySelectorAll('.skill-box');

    // Define the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                entry.target.classList.add('animate');

                // Stop observing after animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold as needed
    });

    // Start observing each skill box
    skillBoxes.forEach(box => {
        observer.observe(box);
    });
});


// Experience section

function showNote() {
    alert("Currently Working");
}

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.classList.contains('circle')) {
                    target.classList.add('animate');
                } else if (target.classList.contains('experience-box')) {
                    target.classList.add('animate');
                }
                observer.unobserve(target); // Stop observing once animated
            }
        });
    }, options);

    document.querySelectorAll('.circle').forEach(circle => {
        observer.observe(circle);
    });

    document.querySelectorAll('.experience-box').forEach(box => {
        observer.observe(box);
    });
});


// Project

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


function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.project-container').forEach(container => {
        observer.observe(container);
    });
});


// Add event listeners to all navigation links to close the menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const menu = document.getElementById('nav-menu');

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
});


// achievements

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.certification-container').forEach(container => {
        observer.observe(container);
    });
});


// volunteer

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.volunteer-item').forEach(item => {
        observer.observe(item);
    });
});

// contact

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const contactSection = document.querySelector('#Contact .custom-container');
    if (contactSection) {
        observer.observe(contactSection);
    }
});











