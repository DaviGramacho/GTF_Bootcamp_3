class makingHero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
        this.ataque = ""
    }

    attack(){
        let ataque;
        switch(this.type){
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
            default:
                ataque = "Sem ataque"
        }
    }

    toString(){
        this.attack();
        console.log(`O ${this.name}, de ${this.age} anos, da classe ${this.type}, atacou usando ${this.ataque}`);
    }

}

let firstHero = new makingHero("Davi", "19", "mago")
let secondHero = new makingHero("Juquinha", "21", "guerreiro")
let thirdHero = new makingHero("Manoel", "31", "monge")
let fourthHero = new makingHero("Haiku", "24", "ninja")

firstHero.toString();
secondHero.toString();
thirdHero.toString();
fourthHero.toString();