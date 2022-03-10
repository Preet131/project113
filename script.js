function preload() {

}

function setup() {
    canvas = createCanvas(620, 480);
    canvas.position(650, 235);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    let c = color(255, 204, 0);
    fill(c);
    noStroke();
    rect(40, 60, 540, 360);
    image(video, 50, 70, 520, 340);
    ellipse(0, 0, 60, 60);
    ellipse(60, 0, 60, 60);
    ellipse(120, 0, 60, 60);
    ellipse(180, 0, 60, 60);
    ellipse(240, 0, 60, 60);
    ellipse(300, 0, 60, 60);
    ellipse(360, 0, 60, 60);
    ellipse(420, 0, 60, 60);
    ellipse(480, 0, 60, 60);
    ellipse(540, 0, 60, 60);
    ellipse(600, 0, 60, 60);
    ellipse(620, 0, 60, 60);
    ellipse(0, 480, 60, 60);
    ellipse(60, 480, 60, 60);
    ellipse(120, 480, 60, 60);
    ellipse(180, 480, 60, 60);
    ellipse(240, 480, 60, 60);
    ellipse(300, 480, 60, 60);
    ellipse(360, 480, 60, 60);
    ellipse(360, 480, 60, 60);
    ellipse(420, 480, 60, 60);
    ellipse(480, 480, 60, 60);
    ellipse(540, 480, 60, 60);
    ellipse(600, 480, 60, 60);
    ellipse(620, 480, 60, 60);
    ellipse(620, 60, 60, 60);
    ellipse(620, 120, 60, 60);
    ellipse(620, 180, 60, 60);
    ellipse(620, 240, 60, 60);
    ellipse(620, 300, 60, 60);
    ellipse(620, 360, 60, 60);
    ellipse(620, 420, 60, 60);
    ellipse(0, 60, 60, 60);
    ellipse(0, 120, 60, 60);
    ellipse(0, 180, 60, 60);
    ellipse(0, 240, 60, 60);
    ellipse(0, 300, 60, 60);
    ellipse(0, 360, 60, 60);
    ellipse(0, 420, 60, 60);
}

function take_snapshot() {
    save("student_name.png");
}