# Week 2 - Angular

💻 📱 **<span style="color:blue">This repository contains two Angular assignments. The first assignment is designed to be fully responsive, ensuring a seamless experience across all devices.
</span>**



## Assignment 1: Registration Form

### Overview
In this assignment, you will create a registration form using Angular. The form should include fields for name, email, phone number, password, confirm password, and a save button. Each field should be mandatory and include specific validation rules.

### Form Details
- **Name:** Required, must be at least 3 characters long and have no numbers.
- **Email:** Required, must be a valid email format.
- **Phone Number:** Required, must be a number.
- **Password:** Required, must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.
- **Confirm Password:** Required, must match the password field.

### Requirements
- Display validation error messages under each form field.
- Use custom CSS to style the form and error messages.
- The "Save" button should be disabled until all mandatory fields are filled with valid data.
- For bonus points, use Angular's Reactive Forms.

![image](https://github.com/user-attachments/assets/4ac22864-dfd1-48cd-8685-a2eabb071034)



## Assignment 2: Hangman

### Overview
Your task is to create a Hangman game using Angular. The Hangman game is a classic word-guessing game where one player chooses a word, and the other player must guess the word by suggesting letters one at a time. For each incorrect guess, a part of a hanging man is drawn. The game is won if the guesser can guess the word before the hanging man is fully drawn.

### Requirements
Your application should have the following features:
- The game should start with a randomly chosen word from a predefined list of words.
- The game should display the number of incorrect guesses made and the number of remaining guesses.
- The game should display the current state of the word being guessed, with blank spaces for each letter that has not yet been guessed and the corresponding letters for each correctly guessed letter.
- The game should allow the player to make a guess by typing a letter.
- The game should display a message when the game is won or lost.
- The game should allow the player to start a new game at any time.

### Tips
- Use components to display the game and handle user input.
- Use services to manage the state of the game.
- Use directives to display the hanging man (or any other display system that you want to use for displaying the mistakes).
- Use pipes to format the game state for display.

![image](https://github.com/user-attachments/assets/dfe90997-ec37-4f4c-9891-3088f1679d23)
