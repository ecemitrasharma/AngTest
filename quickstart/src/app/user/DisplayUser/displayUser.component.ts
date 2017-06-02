import {Component} from "@angular/core";
import { DisplayUserModel } from "./DiplayUserModel";
import { CustomHttpService } from "../../app-common/httpService/http.service";

@Component({
selector : 'display-user',
templateUrl : './app/user/DisplayUser/displayUser.html',
providers: [DisplayUserModel]

})

export class DisplayUserComponent{
 

dispalyUser : DisplayUserModel

 constructor(httpService : CustomHttpService){
 httpService.User_Get().then(i=> this.dispalyUser = i);
 }

}
