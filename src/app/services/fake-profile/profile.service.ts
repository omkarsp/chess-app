import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  readonly profile = signal<any>(null);

  constructor(private http: HttpClient) { }

  fetchProfile(){
    console.log('fetchProfile called');
    if(!this.profile()){
      this.http.get('https://randomuser.me/api/').subscribe((res: any) => {
        this.profile.set(res.results[0]);
      })
    }
  }
}
