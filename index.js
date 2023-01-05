console.log('here');


// open drop menu 
function myFunction (){
    document.getElementById("myDropdown").classList.toggle("show");
};

// close drop menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdown = document.getElementsByClassName("dropdown-content");
        let i 
        for (i = 0;i < dropdown.length; i++) {
            let openDrop = dropdown[i];
            if (openDrop.classList.contains('show')) {
                openDrop.classList.remove('show');
            }
        }
    }
}