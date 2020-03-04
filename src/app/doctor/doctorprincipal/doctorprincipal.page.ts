import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctorprincipal',
  templateUrl: './doctorprincipal.page.html',
  styleUrls: ['./doctorprincipal.page.scss'],
})
export class DoctorprincipalPage implements OnInit {
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
  codigodoctor;
  constructor(
    private doctorService: DoctorService,
    private toastcontroller: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
  async perfil() {
    const toast = await this.toastcontroller.create({
      message: 'ingresando a su perfil',
      duration: 1500,
      animated: true,
      color: 'tertiary',
      position: 'top'
    });
    toast.present();
  }
  async lista() {
    const toast = await this.toastcontroller.create({
      message: 'lista de sus pacientes',
      duration: 1500,
      animated: true,
      color: 'primary',
      position: 'top'
    });
    toast.present();
  }
  async saliendo() {
    const toast = await this.toastcontroller.create({
      message: 'cerrando sesión',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.doctor = res;
          },
          err => console.log(err)
        );
    }
  }
  pacientes() {
    const params = this.activatedRoute.snapshot.params;
    this.codigodoctor = params.id;
    console.log(this.codigodoctor);
    this.lista();
    this.router.navigate(
      [
        '/doctor',
        'citas',
        this.codigodoctor
      ]
    );
  }
  perfildoctor() {
    const params = this.activatedRoute.snapshot.params;
    this.codigodoctor = params.id;
    console.log(this.codigodoctor);
    this.perfil();
    this.router.navigate(
      [
        '/doctor',
        'perfil',
        this.codigodoctor
      ]
      );
  }

  logout() {
    this.doctorService.logout();
    this.saliendo();
  }
}
