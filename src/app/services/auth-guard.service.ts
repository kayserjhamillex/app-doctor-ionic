import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private doctorService: DoctorService) { }
  
  canActivate(): boolean {
    return this.doctorService.isAutenticated();
  }
}
