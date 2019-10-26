const c = document.getElementById('menu-mobile');
window.addEventListener('click', toggleMenuClose);
c.addEventListener('click', toggleMenuOpen);
function toggleMenuOpen(e){
    e.stopPropagation();
        document.getElementById("mobileMenu").classList.toggle("show");
        console.log("entro showMenu()");
        console.log(document.getElementById("mobileMenu").getElementsByClassName('show'));
}
function toggleMenuClose(){
        let dropdownMenu = document.getElementById("mobileMenu");
        if(dropdownMenu.classList.contains('show')){
            dropdownMenu.classList.remove('show');
            console.log("Me sali");
        }
}