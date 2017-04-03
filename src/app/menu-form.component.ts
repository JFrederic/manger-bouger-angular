import { Component,Input} from '@angular/core'
import { Menu } from './menu'
import { MenuService } from './menu.service'


@Component({
    selector: 'menu-form',
    templateUrl: 'app/menu-form.component.html',
    providers: [MenuService]
})


export class MenuFormComponent {

    // public test:string;
    public menus:any;
    public boissons:any;
    public plats:any;

    constructor(private MenuService: MenuService) {
        this.MenuService.getMenu().subscribe(data => {
            this.menus = data;
             this.plats = [];
             this.boissons =[];
            for(let plat in this.menus.plats){
                this.plats.push(plat);
            }

            for(let boisson in this.menus.boissons){
                this.boissons.push(boisson);
            }
        })
    }


}
