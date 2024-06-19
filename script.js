class Player {
  #user_name;
  #score = 0;
  #life = 3;
  // use this varianble to do operations regarding the user choice
  #user_choice;
  constructor(user_name) {
    this.#user_name = user_name;
  }

  // getters
  get choice() {
    return this.#user_choice;
  }
  get name() {
    return this.#user_name;
  }

  get score() {
    return this.#score;
  }

  get life() {
    return this.#life;
  }
  // setters
  set choice(user_choice) {
    this.#user_choice = user_choice;
  }

  // methods
  decrement_life() {
    this.#life -= 1;
  }
  increment_score() {
    this.#score += 1;
  }

  decrememt_score() {
    this.#score -= 1;
  }
}

class Computer {
  #name = "Computer";
  #score = 0;
  #life = 3;
  // use this varianble to do operations regarding the computer choice
  #computer_choice;

  // getters
  get choice() {
    return this.#computer_choice;
  }

  get name() {
    return this.#name;
  }

  get score() {
    return this.#score;
  }

  get life() {
    return this.#life;
  }
  // setters
  set choice(computer_choice) {
    this.#computer_choice = computer_choice;
  }

  // methods
  decrement_life() {
    this.#life -= 1;
  }
  increment_score() {
    this.#score += 1;
  }

  decrememt_score() {
    this.#score -= 1;
  }
}

// function that generates random number from 1-3
function generate_num(){
  return Math.round(Math.random() * 2) + 1;
}



function choice_associate(number) {
  switch (number) {
    case 1:
      return "paper";
    case 2:
      return "rock";
    case 3:
      return "scissors";
  }
}
