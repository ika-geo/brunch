
// burgerMenu


let $menuBtn = document.querySelector(".menuBtn")
let $headerMenu = document.querySelector(".header__menu")

$menuBtn.addEventListener("click", function (){
    $menuBtn.classList.toggle("active")
    $headerMenu.classList.toggle("active")
})




// book form
document.querySelector('.form___dateInput').value = new Date().toISOString().slice(0, 10);
document.querySelector('.form___dateInput').min = new Date().toISOString().slice(0, 10);



// readmore
let readMoreDiscover = document.querySelectorAll(".discoverMenu__itemReadMore");

readMoreDiscover.forEach(function (elem){
    elem.onclick=function (elem){
        this.previousElementSibling.classList.toggle("discoverMenu__readMore")
    }
})