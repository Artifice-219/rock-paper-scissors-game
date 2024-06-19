class Player{
    #user_name;
    #score = 0;
    #life = 3;
    constructor(user_name){
        this.#user_name = user_name;
    }

    // getters
    get name(){
        return this.#user_name;
    }

    get score(){
        return this.#score;
    }

    get life(){
        return this.#life;
    }

    // methods
    decrement_life(){
        this.#life -= 1;
}
    increment_score(){
        this.#score += 1;
    }

    decrememt_score(){
        this.#score -= 1;
    }

    
}


class Computer{
    #name = "Computer";
    #score = 0;
    #life = 3;


    // getters
    get name(){
        return this.#name;
    }

    get score(){
        return this.#score;
    }

    get life(){
        return this.#life;
    }

    // methods
    decrement_life(){
        this.#life -= 1;
}
    increment_score(){
        this.#score += 1;
    }

    decrememt_score(){
        this.#score -= 1;
    }

    
}