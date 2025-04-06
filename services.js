let line=document.querySelectorAll(".line");
let contact=document.querySelector(".contact")
for(let i=0;i<19;i++)
{
    setTimeout(() => {
        line[i].style.width = "40vw";
    }, 0);
    setTimeout(() => {
        line[i].style.width = "0vw";
        contact.style.opacity=1;
    }, 1000);
    
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
//         });


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

























// JavaScript for modal functionality
function openModal(service) {
    // Get modal and update its content based on service
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // Add different content for each service
    if (service === 'service-1') {
        modalTitle.textContent = 'Residential Construction';
        modalDescription.textContent = 'Learn more about our Residential Construction services...';
    } else if (service === 'service-2') {
        modalTitle.textContent = 'Commercial Construction';
        modalDescription.textContent = 'Learn more about our Commercial Construction services...';
    } else if (service === 'service-3') {
        modalTitle.textContent = 'Renovation & Remodeling';
        modalDescription.textContent = 'Learn more about our Renovation & Remodeling services...';
    } else if (service === 'service-4') {
        modalTitle.textContent = 'Landscaping & Outdoor Projects';
        modalDescription.textContent = 'Learn more about our Landscaping & Outdoor Projects services...';
    }

    // Show the modal
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
