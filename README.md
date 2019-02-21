## Technologies Used
This project is a single page, frontend web application utilizing a 3rd party API to authenticate user credentials and store data related to games played.  All tic-tac-toe game logic is executed client-side in JavaScript.  The following technologies were utilized to realize this product:
- HTML
- SCSS
- JavaScript
- jQuery
- AJAX

## Planning

The planning phase for this project was brief, consisting of some outlines for approaching key tasks, a small set of wireframes, and several user stories that turned out to be stretch goals that as of yet are unrealized.

### Execution

I executed the project in several key chunks, creating a Git branch for each and merging once it was complete.

#### Game UI Round 1
- Create a game board using CSS.
- Use a JS array to record the pieces on the board.  Use text to represent pieces on the board by placing an 'X' or 'O' in the board divs when a piece is played.
- Add event listeners to the board squares.
- Create turn tracker that flip-flops between X and O.
- Do not allow user to play a piece in an occupied space.

#### Game Engine
- Create a function to check if the most recently played move resulted in a win.  This was accomplished by iterating over a set of 8 arrays of length three corresponding to the 8 possible win conditions in a game of tic-tac-toe.  If all three spaces in any of the win conditions are occupied by identical pieces (i.e. all X or all O), then the winner is declared and the game is set to over.
- If the board is full and no winner has been found, the game is declared a draw.

#### Game UI Round 2
- Add user feedback messages for turn change, clicking on invalid spaces, and win/draw declarations.
- Prevent user from interacting with the board after the game is over.  Add user feedback message when attempting to do so.

#### Authentication
- Write curl scripts to test communications with the API.
- Add AJAX requests and corresponding functionality for sign up, sign in, change password, and sign out.
- Add user feedback messages for these features.

#### Game API
- Add AJAX functions for creating a new game, sending moves to the API, and retrieving data about past games.
- I also added the ability to call up the board of a previous game, and continue playing if the game isn't over, but this hasn't made it into my current UI.

#### Polish
- The last and most tedious step was polishing the components into a good looking product.
- I fixed many user facing bugs during this stage, and made many design choices.
- Much of this work included hiding various forms away and only displaying them at appropriate times.  Managing user feedback messages also took up a large amount of this time.

### Problem Solving

I planned from the beginning to represent the tic-tac-toe board as an array of length 9.  This is also how the API stores board data, so it made it easy to translate between the two.  This, as well as several global variables to track which players turn it was, and whether the game was over or not, were in my head even before starting.

However, when I first executed these plans, the game board and variables were stored in the `logic.js` file.  Unfortunately, these were so integral to the functionality of the game they ended up being accessed from a variety of files, creating a three file require loop.  To correct this, I had the global variables stored in `store.js`, so that they could be accessed by other files, without the files requiring each other.

## Unsolved Problem
1. I have written the functions for requesting specific games by ID, and have tested it, but did not have time to implement it into the finished UI.  It shouldn't take much effort to add that back in.
2. If you click cancel on the change password form, the form fields each print an error to the console: `An invalid form control with name='passwords[old]' is not focusable.` and `An invalid form control with name='passwords[new]' is not focusable.`.  As far as I can tell, this produces no adverse effects.

## Wireframes and User Stories

### User Stories
1. As a casual user, I want to be able to play without login in so I don't waste my time.
2. As a power user, I want to see a history of the games I've played, including the moves I made, so I can study them and become a Tic-Tac-Toe master.
3. As a user with no friends, I want to be able to play against a computer player.
4. As a power user, I want to be able to choose 1-player vs. computer, hot seat, or online multiplayer so I can play how I want.

### Wireframes

![Tic-Tac-Toe Wireframe](https://i.imgur.com/v21PO9X.jpg "Tic-Tac-Toe Wireframe")
