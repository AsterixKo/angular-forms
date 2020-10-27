import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  firstName: string;
  lastName: string;
  emailAddress: string;

  constructor() { }

  ngOnInit(): void {
  }

  saveForm(formdata) {
    console.log('saveForm...');

    // if (formdata.status === 'INVALID') {
    //   console.log('El formulario es inválido');
    //   return;
    // }

    console.log('Este es el form data:', formdata);

    // console.log('Los valores del formulario son', formdata.value);

    // console.log('El nombre del usuario es', formdata.value.nombre);

    // this.nombre = formdata.value.nombre;

    const { nombre, apellido, email}=formdata.value;
    this.firstName = nombre;
    this.lastName = apellido;
    this.emailAddress = email;
  }

}
