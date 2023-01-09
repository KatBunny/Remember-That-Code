## KatherineSinkler 

Game Title: "Remember That Code!" 

## Intro:Hello There:
This is a card matching game designed to help the memory easily access the basics of html, DOM, css, and JavaScript so that we don't waste time googling the most basic things while coding a webpage.

It is important to create projects that I will personally use and I have been look for a good online study tool for a while now. There are many proven benefits found in using flash cards (see below): The main goal that should be achieve through playing this game consistently is to create memory retention to help maintain the most basic groundwork learned in fast paced education that is learned in coding bootcamps and to also sharpen the memory of those who just don't remimber concepts sometimes. The ultimate plan is to help guide our brain to transfer information from the working memory, then to the short-term memory, and  eventually to the long term memory.
Since this game is designed to be a study tool, The overall format will be designed with flash cards  and/or card matching games as a templet because these games force recall skills and are meant to be quick to play as well as uncomplicated to use.

Here are some expected benefits of playing this game:

* active recall
* Testing the strength of your brain
* testing coherent understanding of material.
* become better at concepts 
* matching terminology to specific problems.

### Wireframe

![my wireframe](./MyFirstBoard.jpg)

### User Experience

* As a user, I want  to have a random collection of cards at each start of game pertaining to the subject that I want to study.

    Create 2 arrays with different, yet matching card values.

        ``` const terms = ["href", "!(bang operator)", "head", "...", "...", ".."];
            const meanings = [" URL of page link..", "creates html skeleton", "container for data about data", "...", "...", ".."]
        ```
    Create a function to generate the arrays.

       ```  function htmlColumns (col1, col2) {
                for(...)
                console.log(...)
                } elseIf {
                    ...
                }; 
                
    ```           
    Creat a foor loop to itterate through the arrays.

        ``` for (let i = 0; ...; ..) {
                for(let ......length);
                const cards = htmlColumns[..];
        }
        return cards;
        ```

    Create a math randomizer function.

        ``` function randomC (cards) {
            ..
        }
        randomC (cards);
        ```

     Create a class Expression of 'Columns' with constructor of 2 paremeters: 
        1.) coding terms
        2.) basic meanings

        ``` const Columns = class {
            constructor(codingTerms, basicMeanings) {
                this.codingTerms = codingTerms;
                this.width = codingWidth;
            }
        }; 
        ```

    Correspond with Html and CSS pages.


* As a user, I want to click a card from one column and then click the matching card from another cell/column to try to make a match. 
    
    See Wire Frame

* As a user, I to be able to login and save progress to compare and  I want the user to easily navigate the webpage. 
    
    See Wireframe.
   
* As a user, I want to be able to quit current subject they are playing and to start on a new subject if they please; or just to be able to quit altogether with the option to save data. I also want to access my account information, the ability to quit or save a game, and to login through this same drop down menu. 
     Create a drop down menu or a button within the nav bar.

     ```` < div class = "dropdown">
                <button>...
                    <a href = "">Link</a>
                </div>
        ```


* As a user, I want to be able to see my score based on a 100% scale chart, starting at 100% and reduced by 5% every mistake I make to be able to recognise what I need to practice more.
    Create a forloop that iterates the score percentile and print to console the ner result.

        ``` const starterScore = "100"
        function starterSore (score); {
        for (let i = 5; i < 100; i -- ); {
            console.log( "Your score is " + score)
            } 
        };
        return starterScore(i);
        ```
* As a user, I want this to be a single player game.


### Contributers
* This game will be on a public github profile so that others who want to customize it to their needs may fork, clone, and edit it for themselves as a study tool.
* I would like to also see other programmers that can add improvements to this game or suggest ways to fix bugs.


### MVP

* I want basic wireframe in place and 1 basic subject with at least two cells/columns of cards in place. 
* I want the user experience to look as similar to my wireframe as possible.
* I want to ensure that html, css, and js pages are correctly linked and deployed as a website.
* I want to make sure that all pseudocode is functional.
    Javascript prompt() method will respond to a login user or guest user accordingly. 
    Array itteration other array methods will be used to create card options.
    DOM manipulation will be used to navigate the site and to practice the funtional abilities.
    I think flexbox will work well for the css and overall wireframe design.
    HTML will include Nav Bar and Divs within the body to accomplish the wire frame goals.   
* Start viewport as a cellphone media query and next make it suitable for pc use.
* Create a nav bar that will be responsive to keeping the score and to supply a dropdown menu so that the user can quit, save game, or to manage account. 
* The game will be black and white for now.

### Version 2:

* Everything from mvp.
* 1-3 subjects added with the same structure of each game. 
* Full user experience in place.
* Media queries in order for most Iphones and Galaxy's.
* Check marks for matches and x's for mix-match 
* Add color and background design elements.
* Psuedocode should mostly be the same as MVP except more aesthetically pleasing for the sake of engagement.

### Version 3 (ambitious stretch goals): 
* 5 subject to play.
* Add different colors to different subjects.
* Sound bites upon completion.
* Added Javascript functions to allow color gradients and sound effects according to user success or downfall.
* Organize subjects to be used together to create some kind of web design by saving each match like a puzzle to a predesigned html page once all matched subjects are completed. 


### Project Timeline.
* I want MVP done by Thursday (1.4.22). 
* I want to try to have some version 2 or all in place by Friday (1.5).
* I want to only focus on practicing the games functionality, editing/fixing bugs, and/or deleting  things that are just not working by Sunday(1.6).

### Pseudocode.

* 1. Use a ifElse loop to display player progress. If player successfully matches a pair;  { print checkmark; } else { print x }.
* 2. Use an array math method to keep score of progress. Set score to 100 % and reduce score every time a card is unmatched by 5%. Nothing will change if Player gets a perfect score.
* 3. Use DOM event to create click effects for each card and button pressed.
* 4. Depending on user version, css and Javascript will add aesthetics to the DOM.
* 5. Use Javascript functions, prompt(), and Arrays to create most of the funtionality of the game. 