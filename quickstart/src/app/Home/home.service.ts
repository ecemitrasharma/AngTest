import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import {CustomHttpService} from '../app-common/httpService/http.service'
import { Person } from "../app-common/ServiceModel/model";


@Injectable()
export class HomeService  {
 
public   httpService : CustomHttpService;  

  constructor(_httpService : CustomHttpService) { 
    this.httpService = _httpService;

    } 

public Get(): Promise<any> {
    return this.httpService.User_Get()
                    .then(i=>i)
                    .catch();
  }
}
