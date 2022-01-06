let player1_name = "Player 1";
let player2_name = "Player 2";

let player1_points = 501;
let player2_points = 501;

let player1_games_won = 0;
let player2_games_won = 0;

function setPlayerNames() {
    player1_name = document.getElementById('player1-name-input-el').value;
    document.getElementById('player1-el').textContent = player1_name;
    player2_name = document.getElementById('player2-name-input-el').value;
    document.getElementById('player2-el').textContent = player2_name;
}

function updatePoints(player) {
    if(player == 'p1') {
        points = document.getElementById('player1-points-input-el').value;
        if(points.match('[01]?[0-9][0-9]?')) {
            if(points >= 0 && points <= 180) {
                player1_points -= points;
                document.getElementById('player1-points-el').textContent = player1_points;
                document.getElementById('player1-points-small-el').textContent = player1_points + ' -';
                document.getElementById('player1-history-el').innerHTML = points + ' [' + player1_points + ']' + '<br>' + document.getElementById('player1-history-el').innerHTML;
            }
        }
        document.getElementById('player1-points-input-el').value = '';
        document.getElementById('player2-points-input-el').focus();
    }
    else if (player == 'p2') {
        points = document.getElementById('player2-points-input-el').value;
        if(points.match('[01]?[0-9][0-9]?')) {
            if(points >= 0 && points <= 180) {
                player2_points -= points;
                document.getElementById('player2-points-el').textContent = player2_points;
                document.getElementById('player2-points-small-el').textContent = player2_points + ' -';
                document.getElementById('player2-history-el').innerHTML = points +  ' [' + player2_points + ']' + '<br>' + document.getElementById('player2-history-el').innerHTML;
            }
        }
        document.getElementById('player2-points-input-el').value = '';
        document.getElementById('player1-points-input-el').focus();
    }
    checkWinner()
}

function checkWinner() {
    if(player1_points <= 0) {
        document.getElementById('player1-points-el').textContent = "Winner!";
        document.getElementById('player1-points-small-el').textContent = 0;
        player1_games_won += 1;
        document.getElementById('player1-games-el').textContent = "Games Won: " + player1_games_won;
        document.getElementById("winner-modal-el").innerHTML = player1_name + " Won!";
        $("#winnerModal").modal()
    }
    else if(player2_points <= 0) {
        document.getElementById('player2-points-el').textContent = "Winner!";
        document.getElementById('player2-points-small-el').textContent = 0;
        player2_games_won += 1;
        document.getElementById('player2-games-el').textContent = "Games Won: " + player2_games_won;
        document.getElementById("winner-modal-el").innerHTML = player2_name + " Won!";
        $("#winnerModal").modal()
    }
}

function resetGame() {
    player1_points = 501;
    player2_points = 501;
    document.getElementById('player1-points-el').textContent = 501;
    document.getElementById('player1-points-small-el').textContent = 501 + ' -';
    document.getElementById('player1-history-el').innerHTML = '';
    document.getElementById('player2-points-el').textContent = 501;
    document.getElementById('player2-points-small-el').textContent = 501 + ' -';
    document.getElementById('player2-history-el').innerHTML = '';
}