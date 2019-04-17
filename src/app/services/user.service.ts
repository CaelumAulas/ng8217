import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/dto/input/user';

@Injectable()
export class UserService {

    private readonly url = 'http://localhost:3200/users'
    
    constructor(private http: HttpClient){}

    cadastrar(dadosForm){
        const user = new User(dadosForm);
        return this.http.post(this.url,user);
    }

}