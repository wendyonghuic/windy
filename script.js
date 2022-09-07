let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('fa-solid fa-xmark-large') /*按三條線按鈕之後icon會變成X讓user可以關掉*/
    navbar.classList.toggle('active') /*按三條線按鈕之後icon會變成X讓user可以關掉*/
}

window.onscroll = () => {
    menu.classList.remove('fa-solid fa-xmark-large') /*按三條線按鈕之後icon會變成X讓user可以關掉*/
    navbar.classList.remove('active') /*按三條線按鈕之後icon會變成X讓user可以關掉*/
}
