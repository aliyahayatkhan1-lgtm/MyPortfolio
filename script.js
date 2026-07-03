document.body.style.overflow = "hidden";

/*====================================================
                MOBILE NAVIGATION
====================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


/*====================================================
                SMOOTH SCROLLING
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*====================================================
                ACTIVE NAVIGATION
====================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*====================================================
                STICKY NAVBAR
====================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(8,17,31,0.95)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    }

    else {

        navbar.style.background = "rgba(15,23,42,.65)";

        navbar.style.boxShadow = "none";

    }

});


/*====================================================
                TYPING ANIMATION
====================================================*/

const typed = new Typed(".typing", {

    strings: [

        "AI & ML Engineer",

        "Python Developer",

        "Web Developer",

        "Machine Learning Enthusiast",

        "Quantitative Research Learner"

    ],

    typeSpeed: 70,

    backSpeed: 40,

    backDelay: 1500,

    loop: true

});


/*====================================================
                BACK TO TOP BUTTON
====================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*====================================================
                ANIMATED COUNTERS
====================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));



/*====================================================
                SCROLL REVEAL
====================================================*/

const revealElements = document.querySelectorAll(

    ".about, .skills, .education, .experience, .projects, .stats, .certificates, .achievements, .resume-section, .contact"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(section => {

    section.classList.add("reveal");

    revealObserver.observe(section);

});



/*====================================================
                PROJECT FILTER
====================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});

/*====================================================
                CONTACT FORM
====================================================*/

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();

    const email = contactForm.querySelector('input[type="email"]').value.trim();

    if (name === "" || email === "") {

        alert("Please fill all required fields.");

        return;

    }

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


/*====================================================
                PROFILE IMAGE EFFECT
====================================================*/

const profile = document.querySelector(".profile-card");

if (profile) {
    profile.addEventListener("mousemove", (e) => {
        // existing code
    });

    profile.addEventListener("mouseleave", () => {
        profile.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
}



/*====================================================
                PROJECT CARD EFFECT
====================================================*/

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});



/*====================================================
                PARALLAX HERO
====================================================*/

window.addEventListener("mousemove", (e) => {

    const hero = document.querySelector(".hero");

    const moveX = (e.clientX / window.innerWidth - 0.5) * 12;

    const moveY = (e.clientY / window.innerHeight - 0.5) * 12;

    hero.style.backgroundPosition = `${moveX}px ${moveY}px`;

});



/*====================================================
                NAVBAR SHADOW ON SCROLL
====================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.borderBottom = "1px solid rgba(255,255,255,.12)";

    }

    else {

        navbar.style.borderBottom = "1px solid rgba(255,255,255,.05)";

    }

});



/*====================================================
                BUTTON RIPPLE EFFECT
====================================================*/

document.querySelectorAll(".btn,.resume-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

/*====================================================
                PREMIUM LOADING SCREEN
====================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    // Keep the loader visible briefly for a premium feel
    setTimeout(() => {

        loader.classList.add("loader-hidden");

        document.body.style.overflow = "auto";

    }, 1800);

});



/*====================================================
                CONSOLE MESSAGE
====================================================*/

console.log("%cWelcome to Aliya Hayat Khan's Portfolio 🚀",

    "color:#00d4ff;font-size:18px;font-weight:bold;");

/*====================================================
            PARTICLE BACKGROUND
====================================================*/

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#00d4ff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5,

            random: true

        },

        size: {

            value: 3,

            random: true

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00d4ff",

            opacity: 0.25,

            width: 1

        },

        move: {

            enable: true,

            speed: 2,

            direction: "none",

            random: false,

            straight: false,

            out_mode: "out"

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            grab: {

                distance: 170,

                line_linked: {

                    opacity: 0.8

                }

            },

            push: {

                particles_nb: 5

            }

        }

    },

    retina_detect: true

});
/*====================================================
            DARK / LIGHT MODE
====================================================*/

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

// Load saved theme

if (localStorage.getItem("theme") === "light") {

    body.classList.add("light-mode");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.style.transition = "all .5s ease";

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

        localStorage.setItem("theme", "light");

    }

    else {

        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

        localStorage.setItem("theme", "dark");

    }

});
/*====================================================
        CERTIFICATE IMAGE POPUP
====================================================*/

const certificateImages = document.querySelectorAll(".certificate-image");

const certificateModal = document.getElementById("certificateModal");

const certificatePopupImage = document.getElementById("certificatePopupImage");

const certificateClose = document.querySelector(".certificate-close");

certificateImages.forEach(image => {

    image.addEventListener("click", () => {

        certificatePopupImage.src = image.src;

        certificateModal.style.display = "flex";

        document.body.style.overflow = "hidden";

    });

});

certificateClose.addEventListener("click", () => {

    certificateModal.style.display = "none";

    document.body.style.overflow = "auto";

});

certificateModal.addEventListener("click", (e) => {

    if (e.target === certificateModal) {

        certificateModal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});
/*====================================================
            RESUME PREVIEW MODAL
====================================================*/

const previewResumeBtn = document.getElementById("previewResumeBtn");
const resumeModal = document.getElementById("resumeModal");
const resumeClose = document.querySelector(".resume-close");

if (previewResumeBtn && resumeModal) {

    previewResumeBtn.addEventListener("click", () => {

        resumeModal.style.display = "flex";
        document.body.style.overflow = "hidden";

    });

}

/* Close Button */

resumeClose.addEventListener("click", () => {

    resumeModal.style.display = "none";

    document.body.style.overflow = "auto";

});

/* Click Outside */

resumeModal.addEventListener("click", (e) => {

    if (e.target === resumeModal) {

        resumeModal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});

/* ESC Key */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && resumeModal.style.display === "flex") {

        resumeModal.style.display = "none";

        document.body.style.overflow = "auto";

    }

});
/*====================================================
        PREMIUM PAGE TRANSITION ANIMATIONS
====================================================*/

const fadeElements = document.querySelectorAll(
    `
.about,
.skills,
.education,
.experience,
.projects,
.stats,
.certificates,
.achievements,
.resume-section,
.contact,
footer
`
);

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(section => {

    section.classList.add("fade-up");

    fadeObserver.observe(section);

});


/*====================================================
            STAGGER CARD ANIMATION
====================================================*/

const staggerCards = document.querySelectorAll(

    `
.project-card,
.skill-card,
.certificate-card,
.achievement-card,
.experience-card,
.stat-box
`

);

const staggerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const cards = entry.target.querySelectorAll(

                `
.project-card,
.skill-card,
.certificate-card,
.achievement-card,
.experience-card,
.stat-box
`

            );

            cards.forEach((card, index) => {

                card.classList.add("stagger");

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 120);

            });

        }

    });

},

    {

        threshold: 0.2

    });

document.querySelectorAll(

    `
.skills,
.projects,
.certificates,
.achievements,
.experience,
.stats
`

).forEach(section => {

    staggerObserver.observe(section);

});

