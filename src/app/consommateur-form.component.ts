import { Component,Input } from '@angular/core';
import { Consommateur } from './consommateur'
import { ConsommateurService } from './consommateur.service'

@Component({
    selector: 'consommateur-form',
    templateUrl: 'app/consommateur-form.component.html',
    providers: [ConsommateurService]
})

export class ConsommateurFormComponent{

    constructor(private consommateurService: ConsommateurService){

    }

    data = new Consommateur(0,0,0,'homme')
    result = ''
    newCalorie() {
        this.result = this.consommateurService.CountNbCalorie(this.data)
        console.log(this.result , this.data)
    }
}

