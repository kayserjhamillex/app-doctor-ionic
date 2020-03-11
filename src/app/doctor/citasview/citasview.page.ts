import { Doctor } from 'src/app/models/Doctor';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialista } from 'src/app/models/Especialista';
import { CitaService } from 'src/app/services/cita.service';
import { DoctorService } from 'src/app/services/doctor.service';

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
    wasa: 0
  };
  hoy: Date = new Date();
  citas: any;
  citasdoctor: any;
  citasfiltradas: any;
  codigodoctor;
  fechaelegida;
  lafechasa;
  lafechasa1;
  wakanda = false;
  lafechadeldia;
  customPickerOptions: any;
  constructor(
    private doctorService: DoctorService,
    private citaService: CitaService,
    private activatedRoute: ActivatedRoute,
    private toastcontroller: ToastController,
    private router: Router
  ) {   }
  // updateMyDate($event) {
  //   console.log($event); // --> wil contains $event.day, $event.month and $event.year
  // }
  fechadeldia() {
    const d = this.hoy.getDate();
    const m = this.hoy.getMonth() + 1;
    const yyyy = this.hoy.getFullYear();
    let dd: any;
    let mm: any;
    let pinshifecha: string;
    if (d < 10) {
      dd = '0' + d;
    } else {
      dd = d;
    }
    if (m < 10) {
      mm = '0' + m;
    } else {
      mm = m;
    }
    const cadena = yyyy + '-' + mm + '-' + dd;
    pinshifecha = cadena.toString();
    // console.log(cadena);
    console.log(pinshifecha);
    // const a1 = new Date(cadena).getTime();
    const a2 = new Date(pinshifecha).getTime();
    // console.log(a1);
    console.log(a2);
    const divisor = 1000;
    // const numero = (a1 / divisor);
    const numero1 = (a2 / divisor);
    // console.log(numero);
    this.lafechasa = numero1;
    }

  ngOnInit() {
    this.fechadeldia();
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
                const fitradocitadoctor = [];
                const filtro1 = this.citas;
                for (const parametro of filtro1) {
                  // tslint:disable-next-line: no-shadowed-variable
                  const wasa = parametro.horario.especialista.DoctorId;
                  if (wasa === this.codigodoctor) {
                    console.log('reservas pal doctor');
                    fitradocitadoctor.push(parametro);
                    this.citasdoctor = fitradocitadoctor;
                  }
                }
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
      message: 'no hay citas para la fecha elegida',
      duration: 1500,
      animated: true,
      color: 'warning',
      position: 'top'
    });
    toast.present();
  }
  async tienepacientes() {
    const toast = await this.toastcontroller.create({
      message: 'tiene pacientes para la fecha elegida',
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
    const pinshifechaelegida = this.datito.elegido;
    console.log(pinshifechaelegida);
    const alv = new Date(pinshifechaelegida).getTime();
    console.log(this.lafechasa);
    const divisor = 1000;
    const alv1 = alv / divisor;
    console.log(alv1);
    this.dataso.wasa = alv1;
    const numerofechaelegida = this.dataso.wasa;
    console.log(numerofechaelegida);
    const numero = this.lafechasa;
    const array1 = this.citasdoctor;
    const filtrado = [];
    if (numerofechaelegida > numero) {
      for (const obj of array1) {
        const numfecha = new Date(obj.Fechacita).getTime();
        console.log(numfecha);
        const numeroselect = (numfecha / divisor);
        console.log(numeroselect);
        console.log(numero);
        if (numeroselect === numerofechaelegida) {
          console.log('encontrando fechas iguales');
          filtrado.push(obj);
          this.citasfiltradas = filtrado;
        } else {
          console.log('no hay coincidencia');
        }
      }
      console.log(this.citasfiltradas);
      console.log(filtrado);
      if (Object.entries(filtrado).length > 0) {
        this.tienepacientes();
        this.wakanda = true;
      } else if (Object.entries(filtrado).length === 0) {
        this.nohaycitas();
      }
    } else {
      this.fechamala();
    }
  }
}
