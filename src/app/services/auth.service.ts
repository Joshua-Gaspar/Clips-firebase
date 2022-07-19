import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IUser from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // userProfile:BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
  //   email: '',
  //   name: '',
  //   age:0,
  //   phone:'',
  // })

  // userProfile: any

  constructor(private http: HttpClient) {
    // this.getUserProfile()

  }

//   public async httpTest(){
//     return this.http.get('http://localhost:8000/auth/test').subscribe(res =>{
//       console.log(res)
//     });
//   }

//   public async createUser(userData: IUser) {
//     return this.http.post('http://localhost:8000/auth/register', userData);
//   }

//   public async LoginUser(userData: IUser) {
//     return this.http.post('http://localhost:8000/auth/login', userData, {
//       withCredentials: true,
//     });
//   }

//   public async getUserProfile() {
//     return this.http.get<IUser>('http://localhost:8000/auth/userProfile', {
//       withCredentials: true,
//   })
//   .subscribe(
//     res =>{

//       console.log(res)
      
//     }
//   )
// }

// saveUserToLocalStorage(user:any){
//   this.getUserProfile()
//   this.userProfile.next(user);
//   localStorage.setItem('user-profile',JSON.stringify(user))
// }
  

}
