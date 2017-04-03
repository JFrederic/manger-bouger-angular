export class Menu {

    public _plats: String[]
    public _boissons: String[]

    constructor() {
        this._plats = []
        this._boissons = []
    }

    get plats() {
        return this._plats;
    }

    set plats(plats:any){
        this._plats = plats;
    }
    
    get boissons(){
        return this._boissons;
    }

    set boissons(boissons:any){
        this._boissons = boissons;
    }
 
}