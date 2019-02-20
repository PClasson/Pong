var ball, player1, player2, player1score, player2score;

function setup() {
    createCanvas(innerWidth / 1.5, innerHeight / 1.5);

    player1score = 0;
    player2score = 0;

    ball = createSprite(width / 2, height / 2, 10, 10);
    ball.shapeColor = color(255);

    player1 = createSprite(width - 10, height / 2, 10, 50);
    player1.shapeColor = color(255);

    player2 = createSprite(width - width + 10, height / 2, 10, 50);
    player2.shapeColor = color(255);
}

function draw() {
    background(60);

    stroke(255);
    strokeWeight(5)
    line(width / 2, 0, width / 2, height);

    textSize(32);
    text(player1score, width - 30, 30);

    textSize(32);
    text(player2score, 10, 30);

    if (player1.overlap(ball) || player2.overlap(ball)) {
        ball.velocity.x = ball.velocity.x * -1;
    }

    if (ball.position.x > width) {
        resetGame();
        player2score += 1;
    }
    if (ball.position.x < 0) {
        resetGame();
        player1score += 1;
    }

    if (ball.position.y > height || ball.position.y < 0) {
        ball.velocity.y = ball.velocity.y * -1;
    }

    drawSprites();
}

function resetGame() {
    ball.velocity.x = 0;
    ball.velocity.y = 0;
    ball.position.x = width / 2;
    ball.position.y = height / 2;

    player1.position.y = height / 2;
    player2.position.y = height / 2;
}

function mousePressed() {
    var left = -5;
    var right = 5;
    if (random(-1, 1) > 0) {
        ball.velocity.x = right;
    } else {
        ball.velocity.x = left;
    }

    ball.velocity.y = random();
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        player1.setSpeed(4, 270);
    }
    if (keyCode == DOWN_ARROW) {
        player1.setSpeed(4, 90);
    }
    if (keyCode == 87) {
        player2.setSpeed(4, 270);
    }
    if (keyCode == 83) {
        player2.setSpeed(4, 90);
    }
}

function keyReleased() {
    if (keyCode == UP_ARROW) {
        player1.setSpeed(0, 0);
    }
    if (keyCode == DOWN_ARROW) {
        player1.setSpeed(0, 0);
    }
    if (keyCode == 87) {
        player2.setSpeed(0, 0);
    }
    if (keyCode == 83) {
        player2.setSpeed(0, 0);
    }
}