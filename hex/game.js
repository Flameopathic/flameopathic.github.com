let canvas = document.getElementById("gameCanvas")
let ctx = canvas.getContext("2d")
let animations = {}

class Board {
    constructor(length) {
        this.board = []
        for (let i = 0; i < length*2-1; i++) {
            this.board.push([])
            for (let j = 0; j < length + (i > length ? -(length*2-1-i) : i); j++) {
                this.board[i].push(0)
            }
        }
    }
    rotate(n) {
        for (let i = 0; i < length*2-1; i++) {
            
        }
    }
}



function drawHexagon(x, y, size, color) {
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x+size, y)
    ctx.lineTo(x+size, y+size)
    ctx.lineTo(x, y+size)
    ctx.lineTo(x, y)
    ctx.fillStyle = color
    ctx.fill()
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(updateGame)
}
updateGame()

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        basketx -= basketspeed
        if (basketx-basketw/2 < 0) {
            basketx = basketw/2
        }
    } else if (event.key === "ArrowRight") {
        basketx += basketspeed
        if (basketx+basketw/2 > canvas.width) {
            basketx = canvas.width-basketw/2
        }
    }
})