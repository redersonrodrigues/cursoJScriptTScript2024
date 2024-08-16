class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodos de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
    // método estático
    static trocaPilha(){
        console.log('Ok, vou trocar a pilha');
    }
    static soma(x,y){
        console.log(this); // this é a quem se refere, no caso classe ControleRemoto
        
        // return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();

// controle1.trocaPilha();

console.log(controle1);

console.log(ControleRemoto.soma(2,4));