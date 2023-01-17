

 const URL = "https://katbunny.github.io/Remember-That-Code/"

 fetch("https://katbunny.github.io/Remember-That-Code/"); 
 .then((data => id('grid-flashC')),
  function list(cardChosen){
      .checkForMatch(err =>
         console.log(err))
         
         .then(data =>(data)) // you could console.log(data) 
    



    const cardArr = [ 
        {
            name: 'array',
            img:'images/My project-14.jpg'
        },
         {
            name: 'array',
            img:'images/My project-15.jpg'
        },
         {
            name: 'const/let',
            img:'images/My project-22.jpg'
        },
         {
            name: 'const/let',
            img:'images/My project-22.jpg'
        },
         {
            name: 'api',
            img:'images/My project-13.jpg'
        },
         {
            name: 'api',
            img:'images/My project-14.jpg'
        },
         {
            name: 'html',
            img:''
        },
         {
            name: 'html',
            img:'images/My project-18.jpg'
        },
         {
            name: 'object',
            img:'images/My project-21.jpg'
        },
         {
            name: 'object',
            img:'images/My project-17.jpg'
        },
         {
            name: 'mkdir',
            img:'images/My project-6.jpg'
        },
         {
            name: 'mkdir',
            img:'images/My project-7.jpg'
        },
         {
            name: 'loop',
            img:'images/My project-16.jpg'
        },
         {
            name: 'loop',
            img:'images/My project-20.jpg'
        },
         {
            name: 'function',
            img:''
        },
         {
            name: 'function',
            img:'images/My project-22.jpg'
        },
         {
            name: 'function',
            img:'images/My project-12.jpg'
        },
         {
            name: 'node',
            img:'images/My project-2.jpg'
        },
          {
            name: 'node',
            img:'images/My project-24.jpg'
        },
          {
            name: 'ajax',
            img:'images/My project-5.jpg'
        },
          {
            name: 'ajax',
            img:'images/ajaxAns.jpg'
        },
    ]


    cardArr.sort[(''), 0.5 - Math.random()]


const gridflashC = document.querySelector('.grid-flashC'),
const resultDisplay = document.querySelector('#result'),
const cardsChosenId = ['']
const cardsWon = ['']


function createBoard() {
    for (let i = 0; i < cardArr.length; i++){
    card = document.createElement('img'),
    card.setAttribute('src', 'images/blank.jpeg'),
    card.setAttribute('data-id', i),
    card.addEventListener('click', flipcard),
    gridflashC.appendChild(card)
}
}


//matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoid = cardChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        console.log('Perfet Match!')
        cards(optionOneId).setAttribute('src', 'images/white')
        cards(optionTwoId).setAttribute('src', 'images/white')
        cardsWon.push(cardsChosen)
    } else {
        cards(optionOneId).setAttribute('src', 'images/blank.png')
        cards(optionTwoid).setAttribute('src', 'images/blank.png')
        console.log('Give it another Go!')
    }
    cardChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArr.length/2) {
        resultDisplay.textContent = ('You Are a JavaScript Guru! Keep it Up!')
    }
}


function flipcard() {
    let cardId = this.getAttribute('images/My project-21.jpg')
    cardChosen.push(cardArr(cardId).name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArr(cardId).img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

