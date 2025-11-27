# Tic-Tac-Toe
A browser-based Tic Tac Toe game built during The Odin Project's [JavaScript track](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), exploring objects, constructors, factory functions, and module patterns.

[Project Guidelines](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)

## Project Overview

This project was completed as part of The Odin Project's JavaScript curriculum, specifically during the modules on objects and object constructors, followed by factory functions and module patterns. The goal was to create a fully functional Tic Tac Toe game while minimizing global code and organizing logic into appropriate objects.

![Tic Tac Toe Cover Image](/assets/tic-tac-toe.png)

### [Live Demo: tic-tac-toe-myopicoracle.netlify.app](https://tic-tac-toe-myopicoracle.netlify.app/)

## Learning Journey

### Initial Approach
I started by following the project's recommendation to build the game logic first in the console. The `test.js` file shows my early experiments with:
- Creating a gameboard using an IIFE factory pattern
- Implementing player move tracking
- Building win condition logic for all 8 possible winning combinations

### Evolution of the Code
The project went through several iterations, as evidenced by the archived versions:
- `script_v1_gameBoard_factoryIIFE.js` - Early factory function implementation
- `script_v2_b4_gameboard_refactor.js` - Pre-refactor version with expanded functionality
- `script.js` - Final implementation using ES6 classes

### Key Learning Points

**Pattern Exploration**: While the assignment emphasized factory functions and IIFEs, I ultimately implemented the final version using ES6 classes. This shows my progression through different JavaScript patterns and my comfort with modern class syntax.

**DOM Manipulation**: The project taught me to:
- Dynamically create and append DOM elements
- Handle user interactions through event listeners
- Update the interface based on game state
- Manage game flow and state transitions

**Game Logic Implementation**: 
- Board state management using arrays of objects
- Win condition checking for rows, columns, and diagonals
- Turn-based gameplay mechanics
- Game reset functionality

**Code Organization**: I learned to separate concerns by organizing logic into different methods within the main `GameLogic` class, though I recognize there's room for improvement in following the original assignment's guidance on factory functions.

## How It Works

1. **Game Setup**: The `GameLogic` class constructor initializes the game board, creates DOM elements, and sets up event listeners
2. **Player Selection**: Players choose their marker (X or O) using the selection buttons
3. **Gameplay**: Players click on board squares to place their markers
4. **Win Detection**: The game checks for win conditions after each move
5. **Game End**: Displays winner or tie message with option to play again

## Technical Implementation

- **Language**: Vanilla JavaScript (ES6 classes)
- **Structure**: Single `GameLogic` class handling all game functionality
- **State Management**: Global array `gameBoardArray` tracks board state
- **DOM Handling**: Dynamic element creation and event binding
- **Styling**: CSS Grid for game board layout

## What I'd Do Differently Today

Looking back at this project, I can see several areas where I'd apply what I've learned since:

- Better separation of concerns between game logic, display control, and player management
- Reduce global variables and improve encapsulation
- Add input validation to prevent moves on already occupied squares
- Implement a cleaner reset mechanism

## Running the Project

Simply open `index.html` in a web browser to play the game. The game supports two players taking turns on the same device.

## Project Files

- `index.html` - Main HTML structure
- `script.js` - Final game implementation
- `styles.css` - Game styling and layout
- `test.js` - Early console-based testing
- `pseudocode.js` - Initial planning and logic mapping
- `archived/` - Previous iterations and experiments