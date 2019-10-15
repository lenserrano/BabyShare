function showMenu(){
    document.getElementById("mobileMenu").classList.toggle("show");
    console.log("entro showMenu()");
    console.log(document.getElementById("mobileMenu").getElementsByClassName('show'));
}
window.onclick = function(e){
    if( !e.target.matches('.dropbtn')){
        let dropdownMenu = document.getElementById("mobileMenu");
        if(dropdownMenu.classList.contains('show')){
            dropdownMenu.classList.remove('show');
            console.log("Me sali");
        }
    }
}