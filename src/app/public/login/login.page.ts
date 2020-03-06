import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
  parametros = {
    correo: '',
    contra: ''
  };
  codigodoctor;
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private toastcontroller: ToastController
    ) { }

    async correcto() {
      const toast = await this.toastcontroller.create({
        message: 'bienvenido doctor@',
        duration: 1500,
        animated: true,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
    async incorrecto() {
      const toast = await this.toastcontroller.create({
        message: 'usuario y contraseña incorrecta',
        duration: 1500,
        animated: true,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    }
  ngOnInit() {
  }
  pass() {
    this.router.navigate(
      [
        '/valid',
      ]
    );
  }

  login() {
    console.log(this.parametros);
    this.doctorService.getlogin(this.parametros.correo, this.parametros.contra).subscribe(res => {
      if (res) {
        // console.log(res);
        this.doctor = res;
        console.log(this.doctor);
        this.correcto();
        this.codigodoctor = this.doctor.id;
        this.router.navigate(
          [
            '/doctor',
            'home',
            this.codigodoctor
          ]
        );
      } else {
        this.incorrecto();
      }
    }, err => {
      console.log(err);
    });
  }
}
