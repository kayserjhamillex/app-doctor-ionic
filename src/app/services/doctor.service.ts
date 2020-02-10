import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/Doctor';
const token = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = 'https://quiet-journey-49563.herokuapp.com/doctor';
  autenticationState = new BehaviorSubject(false);
  constructor(
              private storage: Storage,
              private plt: Platform,
              private http: HttpClient
              ) {
    this.plt.ready().then(() => {
      this.checktoken();
    });
   }

  getlogin(correo: string, contra: string) {
    return this.http.get(`${this.apiUrl}/login/${correo}/${contra}`);
  }

  updateDoctor(id: string|number, updatedDoctor: Doctor): Observable<Doctor> {
    return this.http.put(`${this.apiUrl}/update/${id}`, updatedDoctor);
  }
  getDoctor(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  login() {
    return this.storage.set(token, 'macentromedico').then(res => {
      this.autenticationState.next(true);
    });
  }
  logout() {
    return this.storage.remove(token).then(() => {
      this.autenticationState.next(false);
    });
  }
  isAutenticated() {
    return this.autenticationState.value;
  }

  checktoken() {
    return this.storage.get(token).then(res => {
      if (res) {
        this.autenticationState.next(true);
      }
    });
  }



}
