let exp = document.querySelector(".exp1 h3");
let exp2 = document.querySelector(".exp2 h3");
let line2 = document.querySelector(".line2");
let button = document.querySelector(".button");
let line7 = document.querySelector(".line7");
let line6 = document.querySelector(".line6");
let client = document.getElementById("client")


let line4 = document.querySelector(".line4");

let speed = 10;
let lasttime = 0;
let i = 0;
let l = 0;
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lasttime) / 1000 < 1 / speed) {
        return;
    }
    lasttime = ctime;
    website1();
    website2();
}

function website1() {
    i++;
    if (i > 50) {
        return;
    }
    exp.innerHTML = i + "+";
}
window.requestAnimationFrame(main);


function website2() {
    l++;
    if (l > 12) {
        return;
    }
    exp2.innerHTML = i + "+ Years";
}
window.requestAnimationFrame(main);
setTimeout(() => {
    line2.style.width = "50vw";
}, 500);
setTimeout(() => {
    line4.style.width = "50vw";
}, 1500);
setTimeout(() => {
    line2.style.width = "0vw";
}, 2500);
setTimeout(() => {
    line4.style.width = "0vw";
}, 3500);

button.addEventListener("click", () => {
    setTimeout(() => {
        line7.style.width = "80vw";
    }, 500);
    setTimeout(() => {
        line7.style.width = "0vw";
    }, 2500);
});
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".C");

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});

// document.addEventListener('DOMContentLoaded', () => {
//     // Get the toggle button and nav elements
//     const navToggle = document.getElementById('nav-toggle');
//     const nav = document.querySelector('.nav'); // Select the first nav element
//     const anchor=document.querySelectorAll(".anchor");


//     // Check if the toggle and nav exist to avoid errors
//     let line6 = document.querySelector(".line6");
//     let line5 = document.querySelector(".line5");
//     let line3 = document.querySelector(".line3");
//     let line8 = document.querySelector(".line8");

//         navToggle.addEventListener('click', () => {
//            if( nav.style.width=="40vw" ){
//             nav.style.width="0vw" ;
//             setTimeout(() => {
//                 for(let i=0;i<7;i++){
//                     anchor[i].style.opacity="0";
//                 }
//             }, 0);
//            } 
//            else{
//             nav.style.width="40vw" ;
//             setTimeout(() => {
//                 line6.style.width = "40vw";
//                 line5.style.width = "40vw";
//                 line3.style.width = "40vw";
//                 line8.style.width = "40vw";
//                 for(let i=0;i<7;i++){
//                     anchor[i].style.opacity="1";
//                 }
//             }, 500);
//             setTimeout(() => {
//                 line6.style.width = "0vw";
//                 line5.style.width = "0vw";
//                 line3.style.width = "0vw";
//                 line8.style.width = "0vw";
//             }, 1500);



//            }
        // });


// });


















document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    const anchor = document.querySelectorAll(".anchor");

    let line6 = document.querySelector(".line6");
    let line5 = document.querySelector(".line5");
    let line3 = document.querySelector(".line3");
    let line8 = document.querySelector(".line8");

    let menuOpen = false;

    navToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document

        if (nav.style.width === "40vw") {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = nav.contains(e.target);
        const isClickOnToggle = navToggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle && nav.style.width === "40vw") {
            closeMenu();
        }
    });

    function openMenu() {
        nav.style.width = "40vw";
        menuOpen = true;
        setTimeout(() => {
            line6.style.width = "40vw";
            line5.style.width = "40vw";
            line3.style.width = "40vw";
            line8.style.width = "40vw";
            for (let i = 0; i < anchor.length; i++) {
                anchor[i].style.opacity = "1";
            }
        }, 500);

        setTimeout(() => {
            line6.style.width = "0vw";
            line5.style.width = "0vw";
            line3.style.width = "0vw";
            line8.style.width = "0vw";
        }, 1500);
    }

    function closeMenu() {
        nav.style.width = "0vw";
        menuOpen = false;
        setTimeout(() => {
            for (let i = 0; i < anchor.length; i++) {
                anchor[i].style.opacity = "0";
            }
        }, 0);
    }
});


