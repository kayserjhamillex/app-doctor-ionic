import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-validaruser',
  templateUrl: './validaruser.page.html',
  styleUrls: ['./validaruser.page.scss'],
})
export class ValidaruserPage implements OnInit {
  validador = {
    email: '',
    cell: ''
  };
  doctores: any;
  esdoctor: any;
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private toastcontroller: ToastController,
    private activatedRoute: ActivatedRoute,
    ) { }
    async doccorrecto() {
      const toast = await this.toastcontroller.create({
        message: 'usted es un doctor de nuestro centro medico',
        duration: 1500,
        animated: true,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
    async correcto() {
      const toast = await this.toastcontroller.create({
        message: 'procediendo a actualizar su Contraseña',
        duration: 1500,
        animated: true,
        color: 'success',
        position: 'top'
      });
      toast.present();
    }
    async fallido() {
      const toast = await this.toastcontroller.create({
        message: 'usted no es un doctor',
        duration: 1500,
        animated: true,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    }
  alldoctor() {
    this.doctorService.getDoctors()
    .subscribe(
      res => {
        console.log(res);
        this.doctores = res;
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.alldoctor();
  }
  validar() {
    console.log(this.validador);
    const filtro1 = this.validador.email;
    const filtro2 = this.validador.cell;
    const array = this.doctores;
    const docencontrado = [];
    for (const obj of array) {
      const correos = obj.Email;
      const celulares = obj.Celular;
      if (correos === filtro1) {
        if (celulares === filtro2) {
        this.doccorrecto();
        docencontrado.push(obj);
        this.esdoctor = docencontrado;
        }
      }
    }
    console.log(this.esdoctor);
    
    if (this.esdoctor === []) {
      this.fallido();
    } else {
      const codigo = this.esdoctor[0].id;
      this.router.navigate(
      [
        '/updatepass',
        codigo
      ]
    );
      this.correcto();
    }
  }
}
