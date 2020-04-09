const hamburger = document.getElementById('hamburgerBtn');
const nav = document.getElementById('nav');

let navOpen = false

hamburgerBtn.addEventListener('click',( )=>{
    navOpen = !navOpen;
    if(navOpen){
        nav.style.display = 'flex';
        nav.classList.add('open');
    } else {
        nav.style.display = 'none';
        nav.classList.remove('open');
    }
});