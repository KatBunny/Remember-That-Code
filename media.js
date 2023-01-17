// // open drop menu 
 function myFunction (){
     document.getElementById("myDropdown").classList.toggle("show");
 }

// // close drop menu
 window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {
         let dropdown = document.getElementsByClassName("dropDown-content");
         let i 
         for (i = 0;i < dropdown.length; i++) {
             let openDrop = dropdown[i];
             if (openDrop.classList.contains('show')) {
                 openDrop.classList.remove('show')
             }
         }
     }
}