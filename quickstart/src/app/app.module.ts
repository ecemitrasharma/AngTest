import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {Routes} from '@angular/router'
import { AppComponent }  from './app.component';
import {NavBarComponent } from './nav-bar/nav-bar.component';
import {HomeComponent} from './Home/home.component';
import {HomeService} from './Home/home.service';
import {CustomHttpService} from './app-common/httpService/http.service';
import { HttpModule, JsonpModule } from '@angular/http';
import {UserModule} from "./user/user.module";
import {CreateUserComponent} from "./user/CrerateUser/createUser.component";
import {DisplayUserComponent} from "./user/DisplayUser/displayUser.component";








const routes: Routes = [
   
    { path: 'nav-bar', component: NavBarComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: CreateUserComponent },
    { path: 'display-User', component: DisplayUserComponent }
    
];


@NgModule({
  imports:      [ UserModule,HttpModule, BrowserModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent,NavBarComponent],
  providers : [HomeService, CustomHttpService],
  bootstrap:    [ AppComponent ],
  
  
})
export class AppModule { }
