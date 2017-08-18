/**
 * Created by coughlat on 25-Apr-17.
 */
import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Terry',
            lastName: 'Coughlan'
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}