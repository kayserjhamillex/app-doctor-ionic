import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { CitaService } from 'src/app/services/cita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Especialista } from 'src/app/models/Especialista';
import { Doctor } from 'src/app/models/Doctor';

@Component({
  selector: 'app-citasview',
  templateUrl: './citasview.page.html',
  styleUrls: ['./citasview.page.scss'],
})
export class CitasviewPage implements OnInit {
  especialista: Especialista = {
    id: 0,
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad: {
        id: 0,
        Name: '',
        Precio: 0,
        Atencion: ''
    },
    doctor: {
        id: 0,
        Fullname: '',
        Email: ''
    }
  };
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
  datito = {
    elegido: new Date()
  };
  dataso = {
    wasa: ''
  };
  hoy: Date = new Date();
  citas: any;
  citasdoctor: any;
  citasfiltradas: any;
  codigodoctor;
  fechaelegida;
  lafechasa;
  wakanda = false;
  constructor(
    private doctorService: DoctorService,
    private citaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private toastcontroller: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctorService.getDoctor(params.id).subscribe(
        res => {
          console.log(res);
          this.doctor = res;
          this.codigodoctor = this.doctor.id;
          if (this.codigodoctor) {
            this.citaService.getCitaestado().subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              (res) => {
                console.log(res);
                this.citas = res;
              }
            );
          }
        }
      );
    }
  }


  async fechamala() {
    const toast = await this.toastcontroller.create({
      message: 'por favor elija una fecha a futuro',
      duration: 1500,
      animated: true,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }

  async nohaycitas() {
    const toast = await this.toastcontroller.create({
      message: 'no hay citas para hoy',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  }
  async tienepacientes() {
    const toast = await this.toastcontroller.create({
      message: 'tiene pacientes para hoy',
      duration: 1500,
      animated: true,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  async saliendo() {
    const toast = await this.toastcontroller.create({
      message: 'saliendo de mi lista de pacientes de la fecha elegida',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
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
  pacientes() {
    const fecha1 = this.hoy;

    const hellouda = 1;
    if (hellouda) {
    } else {
      this.fechamala();
    }
    
  }
}
