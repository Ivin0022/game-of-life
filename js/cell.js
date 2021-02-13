class Cell {

    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r || 100
        this.is_alive = false
        this.prev_alive = false
    }

    show() {
        let fill_color = this.is_alive ? 255 : 120
        fill(fill_color)
        rect(this.x * this.r, this.y * this.r, this.r, this.r)

        // fill_color = this.prev_alive ? 255 : 0
        // fill(fill_color, 0, 0)
        // ellipseMode(CORNER)
        // ellipse(this.x * this.r + 4, this.y * this.r + 4, this.r - 8)
    }
}

