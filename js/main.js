
let w = 10
let h = 10
let res = 10

let world = new World(w, h, res)

let isRunning = false;

function setup() {
    createCanvas(w * res, h * res);
}

function draw() {
    background(0);
    if (isRunning) {
        world.update()
    }
    world.show()

}

function keyReleased() {

    if (key === ' ') {
        isRunning = !isRunning

    }

}


function mousePressed() {
    let x = floor(mouseX / res)
    let y = floor(mouseY / res)
    let index = y + x * h
    let cell = world.cells[index]
    cell.is_alive = !cell.is_alive


    // for (const n of world._getNeighbors(cell)) {
    //     n.is_alive = cell.is_alive
    // }

    redraw()
}