function addUser() {
    player1 = document.getElementById("player1_name_input").value;
    player2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location = "quizpage.html";
    document.getElementById("player1_name").innerHTML = player1;
    document.getElementById("player2_name").innerHTML = player2;
}

player1_score = document.getElementById("player1_score").value;
player2_score = document.getElementById("player2_score").value;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + "X" + number2;
    input_box = "<br> Answer : <input type='text' id='input_answer_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Ckeck </button>";
    row = question + input_box + check_button;
    document.getElementById("output").value = row;
}

function check() {
    get_answer = document.getElementById("input_answer_box").value;

    if (get_answer == actual_answer) {

        if (answer_turn == player1) {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question Turn " + player1;
        document.getElementById("answer_turn").innerHTML = "Answer Turn " + player2;
    }
    else {
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question Turn " + player2;
        document.getElementById("answer_turn").innerHTML = "Answer Turn " + player1;
    }
}