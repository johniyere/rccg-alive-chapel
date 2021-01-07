
(() => {
    window.onscroll = function() {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('top-nav').classList.add('pinned');
        } else {
            document.getElementById('top-nav').classList.remove('pinned');
        }
        
    }
})();

let menuVisible = false;

function toggleMenu() {
   if (menuVisible) {
    document.getElementById('nav-menu').classList.remove('show')
    showTimesIcon()
   } else {
    document.getElementById('nav-menu').classList.add('show')
    showBarsIcon()
   }
   menuVisible = !menuVisible
}

function showTimesIcon() {
    document.getElementById('menu-icon').classList.remove('fa-times')
    document.getElementById('menu-icon').classList.add('fa-bars')
}

function showBarsIcon() {
    document.getElementById('menu-icon').classList.remove('fa-bars')
    document.getElementById('menu-icon').classList.add('fa-times')
}