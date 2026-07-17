// ======================================
// SMRITI PHOTOGRAPHY WEBSITE SCRIPT
// ======================================


// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

}



// ======================================
// HERO IMAGE SLIDER
// ======================================

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

let currentSlide = 0;


function nextSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }


    slides[currentSlide].classList.add("active");

}


setInterval(nextSlide,5000);


}



// ======================================
// STICKY HEADER
// ======================================

const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


if(!header) return;


if(window.scrollY > 80){


header.style.background="rgba(0,0,0,.92)";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";


}else{


header.style.background="rgba(0,0,0,.6)";

header.style.boxShadow="none";


}


});



// ======================================
// SCROLL REVEAL
// ======================================

const items=document.querySelectorAll(

".gallery-item,.service,.review,.about,.contact,.title,.stat-box,.package-card"

);


items.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";


});



function reveal(){


items.forEach(item=>{


const top=item.getBoundingClientRect().top;


if(top < window.innerHeight-100){


item.style.opacity="1";

item.style.transform="translateY(0)";


}


});


}



window.addEventListener("scroll",reveal);

reveal();



// ======================================
// BACK TO TOP BUTTON
// ======================================


const topBtn=document.createElement("button");


topBtn.innerHTML="?";

topBtn.id="topBtn";


topBtn.style.cssText=`

position:fixed;
bottom:30px;
right:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#d4af37;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;

`;



document.body.appendChild(topBtn);



window.addEventListener("scroll",()=>{


if(window.scrollY>500){

topBtn.style.display="block";


}else{


topBtn.style.display="none";


}


});



topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};



// ======================================
// LIGHTBOX GALLERY
// ======================================


const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.querySelector(".lightbox");

const lightboxImage=document.querySelector(".lightbox-image");

const closeLightbox=document.querySelector(".close-lightbox");

const prevBtn=document.querySelector(".prev");

const nextBtn=document.querySelector(".next");


let currentImage=0;



if(
galleryImages.length &&
lightbox &&
lightboxImage &&
closeLightbox &&
prevBtn &&
nextBtn
){


function showImage(){

lightboxImage.src=galleryImages[currentImage].src;

}



galleryImages.forEach((img,index)=>{


img.addEventListener("click",()=>{


currentImage=index;

showImage();

lightbox.classList.add("active");


});


});



nextBtn.onclick=()=>{


currentImage++;


if(currentImage>=galleryImages.length){

currentImage=0;

}


showImage();


};



prevBtn.onclick=()=>{


currentImage--;


if(currentImage<0){

currentImage=galleryImages.length-1;

}


showImage();


};



closeLightbox.onclick=()=>{


lightbox.classList.remove("active");


};



}



// ======================================
// WHATSAPP BOOKING FORM
// ======================================


const bookingForm=document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name=document.getElementById("name").value;

const phone=document.getElementById("phone").value;

const email=document.getElementById("email")?.value || "";

const date=document.getElementById("date").value;

const event=document.getElementById("event").value;

const location=document.getElementById("location").value;

const message=document.getElementById("message").value;



const whatsappMessage=

`*New Booking Request*

 Name: ${name}

 Phone: ${phone}

 Date: ${date}

 Event: ${event}

 Location: ${location}

 Message:
${message}`;



const whatsappNumber="917074634410";



const url=

`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;



window.open(url,"_blank");



});


}



// ======================================
// PRELOADER
// ======================================


window.addEventListener("load",()=>{


const preloader=document.getElementById("preloader");


if(preloader){


preloader.style.opacity="0";


setTimeout(()=>{


preloader.style.display="none";


},500);


}


});



// ======================================
// COUNTER ANIMATION
// ======================================


const counters=document.querySelectorAll(".counter");


const counterObserver=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter=entry.target;

const target=+counter.dataset.target;

let count=0;



function update(){


count += Math.ceil(target/100);



if(count < target){


counter.innerText=count;

requestAnimationFrame(update);


}else{


counter.innerText=target;


}



}



update();


counterObserver.unobserve(counter);



}



});


});



counters.forEach(counter=>{


counterObserver.observe(counter);


});



// ======================================
// TESTIMONIAL SLIDER
// ======================================


const testimonials=document.querySelectorAll(".testimonial");


let testimonialIndex=0;



if(testimonials.length>1){


setInterval(()=>{


testimonials[testimonialIndex].classList.remove("active");



testimonialIndex++;



if(testimonialIndex>=testimonials.length){

testimonialIndex=0;

}



testimonials[testimonialIndex].classList.add("active");



},4000);


}



// ======================================
// AOS ANIMATION
// ======================================


if(typeof AOS !== "undefined"){


AOS.init({

duration:1000,

once:true,

offset:100


});


}



console.log("Smriti Photography Website Loaded Successfully!");
// ======================================
// FLOATING SOCIAL BAR ANIMATION
// ======================================

const floatingIcons = document.querySelectorAll(".floating-social a");

floatingIcons.forEach((icon, index) => {

    icon.style.opacity = "0";
    icon.style.transform = "translateX(-60px)";

    setTimeout(() => {

        icon.style.transition = "all .7s ease";

        icon.style.opacity = "1";
        icon.style.transform = "translateX(0)";

    }, 300 * (index + 1));

});
// ======================================
// SOCIAL ICON RIPPLE EFFECT
// ======================================

floatingIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.25)" },
            { transform: "scale(1)" }
        ], {
            duration: 400
        });

    });

});
// ======================================
// YOUTUBE BUTTON ANIMATION
// ======================================

const youtubeBtn = document.querySelector(".youtube-btn");

if (youtubeBtn) {

    setInterval(() => {

        youtubeBtn.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.06)" },
            { transform: "scale(1)" }
        ], {
            duration: 900
        });

    }, 3500);

}
// ======================================
// HERO SOCIAL ICON ROTATION
// ======================================

const heroIcons = document.querySelectorAll(".hero-social a");

heroIcons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transition = ".5s";

        icon.style.transform = "rotate(360deg) scale(1.15)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "rotate(0deg) scale(1)";

    });

});
// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("Smriti Photography Premium v2.0 Loaded ❤️");