let line=document.querySelectorAll(".line");
let contact=document.querySelector(".contact")
for(let i=0;i<19;i++)
{
    setTimeout(() => {
        line[i].style.width = "40vw";
    }, 100);
    setTimeout(() => {
        line[i].style.width = "0vw";
        contact.style.opacity=1;
    }, 2100);

}
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

document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button and nav elements
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav'); // Select the first nav element
    const anchor=document.querySelectorAll(".anchor");


    // Check if the toggle and nav exist to avoid errors
    let line6 = document.querySelector(".line6");
    let line5 = document.querySelector(".line5");
    let line3 = document.querySelector(".line3");
    let line8 = document.querySelector(".line8");

        navToggle.addEventListener('click', () => {
           if( nav.style.width=="40vw" ){
            nav.style.width="0vw" ;
            setTimeout(() => {
                for(let i=0;i<7;i++){
                    anchor[i].style.opacity="0";
                }
            }, 0);
           }
           else{
            nav.style.width="40vw" ;
            setTimeout(() => {
                line6.style.width = "40vw";
                line5.style.width = "40vw";
                line3.style.width = "40vw";
                line8.style.width = "40vw";
                for(let i=0;i<7;i++){
                    anchor[i].style.opacity="1";
                }
            }, 500);
            setTimeout(() => {
                line6.style.width = "0vw";
                line5.style.width = "0vw";
                line3.style.width = "0vw";
                line8.style.width = "0vw";
            }, 1500);



           }
        });


});


document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

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