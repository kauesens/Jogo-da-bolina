console.log("akdfjbasjdhasjdh")

class GameLoop {
    constructor(gameState) {
        this.gameState = gameState
    }

    start() {
        console.log("Jogo iniciou....")
        this.gameState.setState("isRunnig", true)
        while(this.gameState.getState("isRunnig")) {

        }
    }

    stop() {
        this.gameState.setState("isRunnig", false)
    }
}


class Comando1{
    execute() {}
}


class Comando2{
    execute() {}
}


class Comando3{
    execute() {}
}



class handler {
    constructor() {
        
    }
    handle() {

    }
}