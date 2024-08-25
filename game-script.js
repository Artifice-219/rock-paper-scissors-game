// Instantiate a new Player object
let player = new Player("Player");

function player_choice(choice) {
  player.choice = choice;
  // Generate and set the computer's choice
  let random_num = generate_num();
  computer.choice = choice_associate(random_num);

  // Display choices
  display_choices();

  // Determine the winner
  let result = who_wins();
  update_game_result(result);
}

function image_src(value) {
  switch (value) {
    case "rock":
      return "assets/rock hans.jpg";
    case "paper":
      return "assets/open palm hands.jpg";
    case "scissors":
      return "assets/scissor hands.jpg";
  }
}

function display_choices() {
  let player_image_src = image_src(player.choice);
  let computer_image_src = image_src(computer.choice);

  // Display player's choice
  let player_div = document.getElementById("player_choice_img");
  player_div.innerHTML = "";
  let player_img = document.createElement("img");
  player_img.src = player_image_src;
  player_div.appendChild(player_img);

  // Display computer's choice
  let computer_div = document.getElementById("computer_choice_img");
  computer_div.innerHTML = "";
  let computer_img = document.createElement("img");
  computer_img.src = computer_image_src;
  computer_div.appendChild(computer_img);
}

function who_wins() {
  let p_choice = player.choice;
  let c_choice = computer.choice;

  if (p_choice === c_choice) {
    return 0; // It's a tie
  }

  if (
    (p_choice === "rock" && c_choice === "scissors") ||
    (p_choice === "scissors" && c_choice === "paper") ||
    (p_choice === "paper" && c_choice === "rock")
  ) {
    return 1; // Player wins
  } else {
    return -1; // Computer wins
  }
}

function update_game_result(result) {
  let separator_text = document.getElementById("separator-text");
  if (result === 0) {
    separator_text.innerHTML = "It's a tie";
  } else if (result === 1) {
    separator_text.innerHTML = "Player wins";
    player.increment_score();
  } else {
    separator_text.innerHTML = "Computer wins";
    player.decrement_life();
    // increment computer score
    computer.increment_score();
  }

  // Ensure that scores are valid
  if (player.score < 0) {
    // Floor to 0
    player.score = 0;
  } else if (player.score >= 3) {
    // Max to 3
    player.score = 3;
  }

  // Update the player's score display
  document.getElementById("player-score").innerText = player.score;
  // update the player's life display
  document.getElementById("player-life").innerHTML = player.life;

  // update the computer score display
  document.getElementById("computer-score").innerText = computer.score;

  // will displaying win or lose depending on current game scores ofcourse
  if (player.score === 3 && computer.score < 3) {
    let div = document.getElementsByClassName("winning-prompt");
    div[0].style.display = "block";
  } else if (computer.score === 3 && player.score < 3) {
    let div = document.getElementsByClassName("losing-prompt");
    div[0].style.display = "block";
  }
}
