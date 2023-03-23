// !const from HTML
const container = document.querySelector(".content");
const sidebar = document.querySelector(".thumbnails")
const chevronUp = document.querySelector(".up");
const chevronDown = document.querySelector(".down");

// !ARRAY
// state img array
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// get picture element
const itemsArray = document.getElementsByClassName("picture");
const bonusArray = document.getElementsByClassName("preview");
// print picture for every item in array
printPicture();


// @autoplay
let direction = true;
let autoplay;
startAutoplay();
document.querySelector(".content").addEventListener("mouseover", stopCarousel);
document.querySelector(".content").addEventListener("mouseout", startAutoplay);

// set default active class to  a single picture element
let activePictureIndex = 0;
itemsArray[activePictureIndex].classList.add("active");
bonusArray[activePictureIndex].classList.add("active-thumbnails");

// change picture on click
chevronDown.addEventListener("click", function(){
    clearInterval(autoplay);
    clickDown();
    direction = true;
    startAutoplay();
})
chevronUp.addEventListener("click", function(){
    clearInterval(autoplay);
    clickUp();
    direction = false;
    startAutoplay();
})

// autoplay button
const autoBtn = document.getElementById("autoplay-btn")
const spanBtn = document.getElementById("status")

// addEventListener
autoBtn.addEventListener("click", function(){
    spanBtn.classList.toggle("auto");
    if(spanBtn.classList.contains("auto")) {
        document.querySelector(".auto").innerHTML = "ON";
        startAutoplay();
    } else
    {spanBtn.innerHTML = "OFF";
    clearInterval(autoplay);
}
})

// !FUNCTION
function printPicture (){
    let containerElement = "";
    let sidebarElement = "";
    for (let i = 0; i < images.length; i++) {
        console.log(images[i].image);
        containerElement += `
                            <div class="picture"><img src="${images[i].image}">
                            <div class="text-body">
                                <h2>${images[i].title}</h2>
                                <p>${images[i].text}</p>
                            </div>
                            </div>`;
        sidebarElement += `<div class="preview"><img src="${images[i].image}"></div>`;
    }
    container.innerHTML = containerElement;
    sidebar.innerHTML = sidebarElement;
}

function clickDown (){
    itemsArray[activePictureIndex].classList.remove("active");
    bonusArray[activePictureIndex].classList.remove("active-thumbnails");
    
    if(activePictureIndex === itemsArray.length - 1){
        activePictureIndex = 0;
    } else {
        activePictureIndex++;
    }
    itemsArray[activePictureIndex].classList.add("active");
    bonusArray[activePictureIndex].classList.add("active-thumbnails");
}

function clickUp (){
    itemsArray[activePictureIndex].classList.remove("active");
    bonusArray[activePictureIndex].classList.remove("active-thumbnails");

    if(activePictureIndex === 0){
        activePictureIndex = (itemsArray.length - 1);
    } else {
        activePictureIndex--;
    }
    itemsArray[activePictureIndex].classList.add("active");
    bonusArray[activePictureIndex].classList.add("active-thumbnails");
}

function startAutoplay (){
    if (direction === true){
         autoplay = setInterval(clickDown, 2500);
    } else {
        autoplay = setInterval(clickUp, 2500);
    }
    return autoplay
}
function stopCarousel(){
    clearInterval(autoplay);
} 




