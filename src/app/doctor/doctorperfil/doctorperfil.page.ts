import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doctorperfil',
  templateUrl: './doctorperfil.page.html',
  styleUrls: ['./doctorperfil.page.scss'],
})
export class DoctorperfilPage implements OnInit {
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
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  async saliendo() {
    const toast = await this.toastcontroller.create({
      message: 'saliendo del perfil',
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
        )
    }
  }
  exit() {
    const params = this.activatedRoute.snapshot.params;
    this.codigodoctor = params.id;
    console.log(this.codigodoctor);
    this.router.navigate(
      [
        '/doctor',
        'home',
        this.codigodoctor
      ]
      );
    this.saliendo();
  }

}
