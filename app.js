let x = window.matchMedia("(min-width: 620px)");

const menuBurgerIcon = document.getElementById('menuBurger');
const menuCloseIcon = document.getElementById('menuClose');

const navBar = document.getElementById('navbar');

let navBarLists = document.getElementsByClassName('navUl');
let navBarArrows = document.getElementsByClassName('pinkArrow');
console.log(navBarArrows);
console.log(navBarLists);

let menuFunction = () => {
    if (x.matches) {
        menuBurgerIcon.style.display = 'none';
        menuCloseIcon.style.display = 'none';
        navBar.style.visibility = 'visible';
    }
    else {
        menuBurgerIcon.style.display = 'block';
    }
}

menuBurgerIcon.addEventListener('click', () => {
    menuBurgerIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
    navBar.style.display = 'block';

})
menuCloseIcon.addEventListener('click', () => {
    menuBurgerIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
    navBar.style.display = 'none';

})
menuFunction();
x.addListener(menuFunction);

navBarLists[0].addEventListener('click', () => {
    document.getElementById('block1').style.display = 'block';
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'none';
    navBarArrows[0].style.transform = 'rotate(180deg)';
})
navBarLists[1].addEventListener('click', () => {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'block';
    document.getElementById('block3').style.display = 'none';
    navBarArrows[1].style.transform = 'rotate(180deg)';
})
navBarLists[2].addEventListener('click', () => {
    document.getElementById('block1').style.display = 'none';
    document.getElementById('block2').style.display = 'none';
    document.getElementById('block3').style.display = 'block';
    navBarArrows[0].style.transform = 'rotate(180deg)';
})