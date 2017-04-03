import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
       <div class="container-fluid">
        <div class="row">
          <div class="col-md-12" style="padding:0">
            <div class="alert alert-info" role="alert" style="border-radius:0; margin-bottom:50px;"><h3 class="text-center">Manger Bouger</h3></div>
          </div>
        </div>
      </div>
        <div class="container" style="border:2px solid #ccc; padding:20px;">

       <div class="col-md-6">
        <consommateur-form></consommateur-form>
       </div>
       <div class="col-md-6">
          <menu-form></menu-form>
        </div>
      </div>

      `,
})
export class AppComponent  { 
  
  title = 'Manger-Bouger'; 

}
