export class Consommateur {

    private _height:number
    private _weight:number
    private _age:number
    private _sex: string

    constructor(height:number,weight:number,age:number,sex:string){
        
        this._height = height
        this._weight = weight
        this._age = age
        this._sex = sex
        
    }

    
    get sex() {
        return this._sex
    }

    get weight() {
        return this._weight
    }

    get height() {
        return this._height
    }

    get age() {
        return this._age
    }

    set sex(sex: string){
        this._sex = sex;
    }

    set weight(weight: number){
        this._weight = weight;
    }

    set height(height: number){
        this._height = height;
    }

    set age(age: number){
        this._age = age;
    }
}