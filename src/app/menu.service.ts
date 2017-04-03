import { Component , Input } from '@angular/core'
import { Menu } from './menu'
import { Injectable } from '@angular/core'
import { Http,Response,Headers,RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class MenuService {

    public obj:any;
    
    constructor(private http:Http){
    }

    public getMenu() {
        return this.http.request('datastore/aliments.json')
                        .map((res:any) => res.json())
                        
    }
}