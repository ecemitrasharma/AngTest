import { Component, Input } from "@angular/core"
import {HomeService} from './home.service'
import { Person } from "../app-common/ServiceModel/model";

@Component({
selector : 'home',
templateUrl : '../app/Home/home.html',
providers : [Person]
})

export class HomeComponent{
  @Input() 
  abc : number = 0;
  prop : Person = new Person();
 constructor (private homeService: HomeService) {

     this.homeService.Get().then(a=> 
     this.prop = a
     );
 }

getAll() {
   
                     
  }
 




}


