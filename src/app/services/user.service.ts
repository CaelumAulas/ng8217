import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/dto/input/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

  private readonly url = environment.API + 'users'

  constructor(private http: HttpClient) { }

  cadastrar(dadosForm) {
    const user = new User(dadosForm);
    return this.http.post(this.url, user);
  }

}
