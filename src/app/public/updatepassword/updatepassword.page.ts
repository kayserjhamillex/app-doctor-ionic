import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.page.html',
  styleUrls: ['./updatepassword.page.scss'],
})
export class UpdatepasswordPage implements OnInit {
  doctor: Doctor = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Celular: '',
    Email: '',
    Imagendoctor: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: ''
  };
  doctor1: Doctor = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Celular: '',
    Email: '',
    Imagendoctor: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: ''
  };
  validador = {
    pas1: '',
    pas2: ''
  };
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private toastcontroller: ToastController,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id).subscribe(
        res => {
          console.log(res);
          this.doctor = res;
        }
      );
    }
  }
  updatepass() {
    const params = this.activatedRoute.snapshot.params;
    const codigodoc = params.id;
    console.log(this.validador);
    if (this.validador.pas1 === this.validador.pas2) {
      this.doctor.Password = this.validador.pas1;
      this.doctorService.updateDoctor(codigodoc, this.doctor).subscribe(
        res => {
          console.log(res);
          this.doctor1 = res;
          this.correcto();
          this.router.navigate(
            [
              '/login',
            ]
          );
        }
      );
    } else {
      this.fallido();
    }
  }

  async correcto() {
    const toast = await this.toastcontroller.create({
      message: 'se actualizo la Contraseña',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  async fallido() {
    const toast = await this.toastcontroller.create({
      message: 'las Contraseña son diferentes',
      duration: 1500,
      animated: true,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }

}
