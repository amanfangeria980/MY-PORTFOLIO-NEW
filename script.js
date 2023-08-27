let tabLinks=document.getElementsByClassName('tab-links');

let tabContents=document.getElementsByClassName('tab-contents')

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}


let sidemenu=document.getElementById("sidemenu");
function openMenu(){
    sidemenu.style.right="0";
}

function closeMenu(){
    sidemenu.style.right= "-200px";
}


// Typed.js

var typed=new Typed(".auto-type",{
    strings: ["Coder","Developer","Youtuber","Exploring DevOps","Open-Source Enthusiast","& more..."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    // shuffle: true,
    showCursor: true,
    cursorChar: '.',
})