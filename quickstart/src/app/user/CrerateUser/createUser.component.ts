import {Component} from "@angular/core"
import {CreateUserModel} from "./createuser.model"
import {CustomHttpService} from '../../app-common/httpService/http.service'

@Component({
selector : 'create-user',
templateUrl : './app/user/CrerateUser/createuser.html',
providers: [CreateUserModel]

})

export class CreateUserComponent{

    _httpService : CustomHttpService;

model : CreateUserModel = new CreateUserModel();

constructor(model: CreateUserModel, httpService : CustomHttpService ){


this._httpService = httpService;
}


SubmitUser() {
   this._httpService.User_Post(this.model).then(i=> 
   console.log(i)
   );
    
  }




}