document.addEventListener('DOMContentLoaded', () => {
    //call on my jsCards here
    const cardArr = [
        {
            name: 'ajaxAns',
            img: 'img/', 
        },
        {
            name:'images/My project-20.jpg',
            img:'img/',
        }
    //      {
    //         name:'',
    //         img:'','images/htmlprompt.jpg'
    //     },
    //  {
    //         name:'',
    //         img:'','images/My project-2.jpg'
    //     },
    //          {
    //         name:'',
    //         img:'','images/My project-4.jpg'
    //     },
        //      {
        //     name:'',
        //     img:'','images/My project-5.jpg'
        // },
        //      {
        //     name:'',
        //     img:'','images/My project-6.jpg'
        // },
        //      {
        //     name:'',
        //     img:'','images/My project-7.jpg'
        // },
    //  {
    //         name:'',
    //         img:'','images/My project-8.jpg'
    //     },
    //  {
    //         name:'',
    //         img:'','images/My project-9.jpg'
    //     },
    //  {
    //         name:'',
    //         img:'','images/My project-10.jpg'
    //     },
    //     {
    //         name:'',
    //         img:'','images/My project-11.jpg'
    //     } 
        // {
        //     name:'',
        //     img:'', 'images/My project-12.jpg'
        // }
      ]

      cardArr.sort[(''), 0.5 - Math.random()]

      //make board for cards to exist

      const grid = document.querySelector('.grid')
      const resultDisplay = document.querySelector('#result')
      const cardsChosenId = []
      const cardsWon = []

      function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            const card =document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id', ['i'])
            card.addEventListener('click, flipcard')
            grid.appendChild(card)

            //matches

            function checkForMatch() {
                const cards = document.querySelectorAll('img')
                const optionOneId = cardChosenId[0]
                const optionTwoid = cardChosenId[1]
                if (cardsChosen[0] === cardsChosen[1]) {
                    alert('Perfet Match!')
                    cards(optionOneId).setAttribute('src', 'images/white')
                    cards(optionTwoId).setAttribute('src', 'images/white')
                    cardsWon.push(cardsChosen)
                } else {
                    cards(optionOneId).setAttribute('src', 'images/blank.png')
                    cards(optionTwoid).setAttribute('src', 'images/blank.png')
                    alert('Give it another Go!')
                }
                cardsChosen = []
                cardsChosenId = []
                resultDisplay.textContent = cardsWon.length
                if(cardsWon.length === cardArr.length/2) {
                    resultDisplay.textContent = "You Are a JavaScript Guru! Keep it Up!"
                }

                }

                }



            }
            //flip card

            function flipcard() {
                let cardId = this.getAttribute('data-id')
                cardChosen.push(cardArr(cardId).none)
                cardChosenId.push(cardId)
                this.setAttribute('src', cardArr(cardId).img)
                // if (cardsChosen.length === 2  {
                //     setTimeout(checkForMatch)
                // }
                // )
            }
        }
    

    //   createBoard()
// }
)

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