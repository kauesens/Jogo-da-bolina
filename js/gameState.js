class GameState {
    #state;

    constructor(){
        this.#state = {}
    }

    setState(stateName, statevalue) {
        this.#state[stateName] = statevalue;
    }

    getState(stateName) {
        return this.#state[stateName];
    }
}