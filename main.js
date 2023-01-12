function setup()
{
    canvas = createCanvas(640, 450);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    image(video, 0, 0, 640, 480);
    fill('blue')
    rect(35, 50, 33, 375)
    rect(570, 50, 33, 375)
    rect(35, 37, 530, 33)
    rect(35, 390, 530, 33)
    fill('yellow')
    circle(50, 50, 70)
    circle(585, 50, 70)
    circle(585, 405, 70)
    circle(50, 405, 70)
}

function take_snapshot()
{
    save('Cool Image.png');
}