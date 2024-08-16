class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

ligar(){
    if (this.ligado){
        console.log(`${this.nome} - já está ligado`);
        return;
    }
    this.ligado = true;
}
desligar(){
    if (!this.ligado){
        console.log(`${this.nome} - já está desligado`);
        return;
    }
    this.ligado = false;
}
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor, modelo){
        super(nome); // é o mesmo que chamar o construtor da classe pai aqui
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '15');
s1.ligar();
console.log(s1);


class Tablet extends DispositivoEletronico{
    constructor(nome,temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você auterou o método ligar');
        
    }

    falaOi(){
        console.log('Oi do tablet');
    }
}

const t1 = new Tablet('Tablet Sansung',true);
console.log(t1);
t1.ligar();
t1.ligar();
t1.falaOi();
