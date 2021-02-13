class World {

    constructor(w, h, res) {
        this.cells = []
        this.w = w
        this.h = h
        this.res = res

        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                let box = new Cell(i, j, res)
                this.cells.push(box)
            }
        }
    }

    _getCell(i, j) {
        return this.cells[abs(j % this.h) + abs(i % this.w) * this.h]
    }

    _getNeighbors(cell) {
        return [
            // horizontal
            this._getCell(cell.x + 1, cell.y),
            this._getCell(cell.x - 1, cell.y),

            // vertical
            this._getCell(cell.x, cell.y + 1),
            this._getCell(cell.x, cell.y - 1),

            // diagonal /
            this._getCell(cell.x + 1, cell.y + 1),
            this._getCell(cell.x - 1, cell.y - 1),

            // diagonal \
            this._getCell(cell.x + 1, cell.y - 1),
            this._getCell(cell.x - 1, cell.y + 1),
        ]
    }

    getAliveCount(cell) {
        let alive_count = 0;

        for (const n of world._getNeighbors(cell)) {
            if (n.prev_alive) {
                alive_count++;
            }
        }

        return alive_count
    }


    update() {
        for (const cell of world.cells) {
            cell.prev_alive = cell.is_alive
        }

        for (const cell of this.cells) {

            let count = this.getAliveCount(cell);

            if (cell.is_alive) {
                if (count < 2) {
                    cell.is_alive = false;
                } else if (count > 3) {
                    cell.is_alive = false;
                }
            } else if (count == 3) {
                cell.is_alive = true;
            }

        }




    }


    show() {
        for (const cell of this.cells) {
            cell.show()
        }
    }
}

