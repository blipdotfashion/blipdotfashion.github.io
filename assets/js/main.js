/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 0.5, delay: 0, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 0.5, delay: 0.3, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 0.5, delay:0.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 0.5, delay: 1, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 0.5, delay: 1.6, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 0.5, delay: 1.3, y: 30})




// App redirect
function redirectToStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var androidPlayStoreUrl = 'https://play.google.com/store/apps/details?id=fashion.blip.Blip';
    var iOSAppStoreUrl = 'https://apps.apple.com/app/id6476975641';

    if (/android/i.test(userAgent)) {
        window.location.href = androidPlayStoreUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = iOSAppStoreUrl;
    } else {
        // Fallback for desktop or unsupported devices
        // alert('Please visit our website on a mobile device to download the app.');
        window.location.href = androidPlayStoreUrl;
    }
}