/**
 * Created by coughlat on 25-Apr-17.
 */
import {Component} from '@angular/core'
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles:[`
        em {float:right; color: #e05c65; padding-left: 10px}
    `]
})

export class LoginComponent{
    constructor(private authService:AuthService, private router:Router){

    }
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['inventories'])
    }

    cancel(){
        this.router.navigate(['inventories'])
    }
}