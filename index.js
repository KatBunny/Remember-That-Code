// const URL = "https://katbunny.github.io/Remember-That-Code/" // nice
// function 

const gridflashC = document.querySelector('.grid-flashC')

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('HTMLDivElement',
    card.setAttribute(('src', 'images/blank.jpeg'),
    card.setAttribute('flashC', i),
    //card.addEventListener('click', flipcard)
    gridflashC.appendChild(card)));
    }
}


// fetch("https://katbunny.github.io/Remember-That-Code/"); 
// .then((data => list(.grid-flashC)))
//  function list(data){
//      .try(err => console.log(err))
//     .then(data =>(data)) // you could console.log(data) 
 


// const data =   (cardArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // incomplete assignment

// // }
// //     .then(response => response.json()) // this .then() chain needs to be attached to fetch(URL)
// //     .then(data => list(data)) // 
// //     .try(err => console.log(err))
// //     .then(data =>(data)) // you could console.log(data) here to see what you got from the fetch
// // }
//  const name = document.getElementById('flashC') // this section is a good start
// // const image = document.getElementById('cake-image')
// // const description = document.getElementById("cake-description")
// const reviews = document.getElementById("flashC").innerHTML += "";

//  function addDivID() {
//             document.getElementById("flashC").innerHTML +=
//             <h3>"AJAX"</h3>;
//         }
        
//         // $("div#clickable").click(function(){ window.location = "http://whatever.com/"});

//  document.addEventListener('DOMContentLoaded', () => {
//      //call on my jsCards here
//      const cardArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

//        cardArr.sort[(''), 0.5 - Math.random()]

// //       //make board for cards to exist

//        const grid = document.querySelector('.grid-flashC')
//        const resultDisplay = document.querySelector('#result')
//        const cardsChosenId = []
//        const cardsWon = []

//        function createBoard() {
//          for (let i = 0; i < cardArr.length; i++) {
//              const card =document.createElement('img')
//              card.setAttribute('src','images/blank.png')
//              card.setAttribute('data-id', ['i'])
//              card.addEventListener('click, flipcard')
//              grid.appendChild(card)
//              //matches

//              function checkForMatch() {
//                  const cards = document.querySelectorAll('img')
//                  const optionOneId = cardChosenId[0]
//                  const optionTwoid = cardChosenId[1]
//                  if (cardsChosen[0] === cardsChosen[1]) {
//                      alert('Perfet Match!')
//                      cards(optionOneId).setAttribute('src', 'images/white')
//                      cards(optionTwoId).setAttribute('src', 'images/white')
//                      cardsWon.push(cardsChosen)
//                  } else {
//                      cards(optionOneId).setAttribute('src', 'images/blank.png')
//                      cards(optionTwoid).setAttribute('src', 'images/blank.png')
//                      alert('Give it another Go!')
//                 }
//                  cardsChosen = []
//                  cardsChosenId = []
//                  resultDisplay.textContent = cardsWon.length
//                  if(cardsWon.length === cardArr.length/2) {
//                      resultDisplay.textContent = "You Are a JavaScript Guru! Keep it Up!"
//                  }

//                }

//           }



//              }
//              //flip card

//              function flipcard() {
//                  let cardId = this.getAttribute('data-id')
//                  cardChosen.push(cardArr(cardId).none)
//                  cardChosenId.push(cardId)
//                  this.setAttribute('src', cardArr(cardId).img)
//                  if (cardsChosen.length === 2, {
//                      setTimeout(checkForMatch);
//                   })
             
         
    

// createBoard()
//                 }
            


// // // open drop menu 
//  function myFunction (){
//      document.getElementById("myDropdown").classList.toggle("show");
//  };

// // // close drop menu
//  window.onclick = function(event) {
//      if (!event.target.matches('.dropbtn')) {
//          let dropdown = document.getElementsByClassName("dropDown-content");
//          let i 
//          for (i = 0;i < dropdown.length; i++) {
//              let openDrop = dropdown[i];
//              if (openDrop.classList.contains('show')) {
//                  openDrop.classList.remove('show');
//              }
//          }
//      }
//  }




//  function startGame() {
//      myGameArea.start();
//  }

// let cardsBaseCanvas = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }