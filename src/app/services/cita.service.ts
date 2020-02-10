import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Citaa } from '../models/Citaa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  apiUrlcita = 'https://quiet-journey-49563.herokuapp.com/cita';
  constructor(private http: HttpClient) { }

  getCitaporfecha(fecha: Date) {
    return this.http.get(`${this.apiUrlcita}/filtro/${fecha}`);
  }

  getCita(id: string) {
    return this.http.get(`${this.apiUrlcita}/${id}`);
  }

  updateCita(id: string|number, updatedCita: Citaa): Observable<Citaa> {
    return this.http.put(`${this.apiUrlcita}/update/${id}`, updatedCita);
  }
}
