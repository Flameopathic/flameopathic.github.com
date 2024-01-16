let canvas = document.getElementById("gameCanvas")
let ctx = canvas.getContext("2d")
let animations = {}

class Board {
    constructor(length) {
        this.board = []
        this.length = length
        for (let i = 0; i < this.length*2-1; i++) {
            this.board.push([])
            for (let j = 0; j < this.length + (i > this.length ? -(this.length*2-1-i) : i); j++) {
                this.board[i].push(0)
            }
        }
    }
    rotate(n=1) {
        for (let r = 0; r < n; r++) {
            newBoard = []
            for (let i = 0; i < this.length*2-1; i++) {
                newBoard.push([])
                for (let j = 0; j < this.length + (i > this.length ? -(this.length*2-1-i) : i); j++) {
                    newBoard[i].push(0)
                }
            }
            for (let i = 0; i < this.length*2-1; i++) {
                for (let j = 0; j < this.board[i].length(); j++) {
                    
                }
            }
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