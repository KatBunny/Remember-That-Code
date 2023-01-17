// const card = document.getElementsById('card')

// card.addEventListener('click', flipCard);

// function flipCard() {
//     card.classList.toggle('flipCard');
// }


// const URL = "https://katbunny.github.io/Remember-That-Code/" // nice
// // function 
// fetch("https://katbunny.github.io/Remember-That-Code/"); 
// .then((data => list(.grid-flashC)))
//  function list(data){
//      .catch(err => console.log(err))
//     .then(data =>(data)) // you could console.log(data) 

// }
//     .then(response => response.json()) // this .then() chain needs to be attached to fetch(URL)
//     .then(data => list(data)) // 
//     .try(err => console.log(err))
//     .then(data =>(data)) // you could console.log(data) here to see what you got from the fetch
// }

// //  function addDivID() {
// //             document.getElementById("flashC").innerHTML +=
// //             <h3>"AJAX"</h3>;
// //         }



// $( document).ready(function() {

//   $('.flip-card-inner').on('click', function () {
//     $(this).find('.flip-card-front').toggleClass('flip-card-back');
//   });

// });


// document.addEventListener('DOMContentLoaded', () => {
//     //call on my jsCards here
//     const cardArr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
//     console.log(cardArr[]);
//     cardArr.sort[(''), 0.5 - Math.random()]
// //make board for cards to exist
// const gridflashC = document.querySelector('.grid-flashC'),
// const resultDisplay = document.querySelector('#result'),
// const cardsChosenId = ['']
// const cardsWon = ['']
// //create board
// function createBoard() {
//     for (let i = 0; i < cardArr.length; i++){
//     const card = document.createElement('HTMLDivElement(.flashC)',
//     card.setAttribute(('src', 'images/blank.jpeg'),
//     card.setAttribute('data-id', i),
//     card.addEventListener('click', flipcard),
//     gridflashC.appendChild(card)
//     )
//     )}
// }
// //matches
// function checkForMatch() {
//     const cards = document.querySelectorAll('img')
//     const optionOneId = cardChosenId[0]
//     const optionTwoid = cardChosenId[1]
//     if (cardsChosen[0] === cardsChosen[1]) {
//         alert('Perfet Match!')
//         cards(optionOneId).setAttribute('src', 'images/white')
//         cards(optionTwoId).setAttribute('src', 'images/white')
//         cardsWon.push(cardsChosen)
//     } else {
//         cards(optionOneId).setAttribute('src', 'images/blank.png')
//         cards(optionTwoid).setAttribute('src', 'images/blank.png')
//         alert('Give it another Go!')
//     }
//     cardsChosen = []
//     cardsChosenId = []
//     resultDisplay.textContent = cardsWon.length
//     if(cardsWon.length === cardArr.length/2) {
//         resultDisplay.textContent = ('You Are a JavaScript Guru! Keep it Up!')
//     }
// }
// },
// //flip card
// function flipcard() {
//     let cardId = this.getAttribute('images/My project-21.jpg')
//     cardChosen.push(cardArr(cardId).name)
//     cardChosenId.push(cardId)
//     this.setAttribute('src', cardArr(cardId).div)
//     if (cardsChosen.length === 2) {
//         setTimeout(checkForMatch, 300);
//     }
// }
