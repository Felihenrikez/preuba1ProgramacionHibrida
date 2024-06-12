export abstract class figuraGeometrica {
    constructor(nombre:string){}
    abstract calcularPerimetro():number
}
export class circulo extends figuraGeometrica{
    radio:number
    constructor(nombre:string,radio:number){
        super(nombre)
        this.radio=radio


    }

   override calcularPerimetro():number{
    let perimetro :number
        let piNumber : number= Math.PI
        perimetro= 2*this.radio*piNumber
        return perimetro
    

    }
}

export class trianguloEscaleno extends figuraGeometrica{
    ladoA:number
    ladoB:number
    ladoC:number
    constructor(nombre:string,ladoA:number,ladoB:number,ladoC:number){
        super(nombre)
        this.ladoA=ladoA
        this.ladoB=ladoB
        this.ladoC=ladoC
    }

    override calcularPerimetro(): number {
        let perimetro:number
        perimetro= this.ladoA+this.ladoB+this.ladoC
        return perimetro
    }

}

export class trianguloEquilatero extends trianguloEscaleno{
    constructor(nombre:string,ladoA:number,ladoB:number,ladoC:number){
        super(nombre,ladoA,ladoB,ladoC)
    }
    override calcularPerimetro(): number {
        let perimetro
        perimetro = this.ladoA*3
        return perimetro
    }
}