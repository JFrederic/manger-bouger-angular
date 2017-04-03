import { Injectable } from '@angular/core'
import { Consommateur } from './consommateur'

@Injectable() 

export class ConsommateurService {

    public CountNbCalorie(Consommateur:Consommateur): any {

        let nbCalorie: number;
        if(Consommateur.sex == "Femme") {
             nbCalorie =  9.740 * Consommateur.weight + 172.9 * Consommateur.height - 4.737 * Consommateur.age + 667.051;
        }
        else if (Consommateur.sex == "Homme"){
             nbCalorie =  13.707 * Consommateur.weight + 492.3 * Consommateur.height - 6.673 * Consommateur.age + 77.607;
        }
        else{
            return "Vous n'avez pas rempli tous les champs !"
        }
        return nbCalorie;
    }
}