import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router'
import {Routes} from '@angular/router'
import {CreateUserComponent} from "./CrerateUser/createUser.component"
import {DisplayUserComponent} from "./DisplayUser/displayUser.component"
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "../Home/home.component";
import { AppModule } from "../app.module";

const routes: Routes = [
   
    { path: 'create-user', component: CreateUserComponent },
    
];


@NgModule({
  imports:      [BrowserModule,FormsModule, RouterModule.forRoot(routes)  ],
  declarations: [ CreateUserComponent,DisplayUserComponent],
  providers : [],
  exports : []
  
})
export class UserModule { 
  
}
