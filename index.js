console.log('here');


// open drop menu 
function myFunction (){
    document.getElementById("myDropdown").classList.toggle("show");
};

// close drop menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdown = document.getElementsByClassName("dropDown-content");
        let i 
        for (i = 0;i < dropdown.length; i++) {
            let openDrop = dropdown[i];
            if (openDrop.classList.contains('show')) {
                openDrop.classList.remove('show');
            }
        }
    }
}




function startGame() {
    myGameArea.start();
}

let cardsBaseCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}