import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  get nombreInvalido(): boolean {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoInvalido(): boolean {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get emailInvalido(): boolean {
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get calleInvalido(): boolean {
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched;
  }
  get ciudadInvalido(): boolean {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }
  get paisInvalido(): boolean {
    return this.forma.get('direccion.pais').invalid && this.forma.get('direccion.pais').touched;
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['Horse', [Validators.required, Validators.minLength(3)]],
      apellido: ['Luis', Validators.required],
      email: ['horse@luis.com', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
      direccion: this.fb.group({
        calle: ['Plaza España', Validators.required],
        ciudad: ['Madrid', Validators.required],
        pais: ['España', Validators.required]
      })
    });
  }

  saveForm() {
    console.log(this.forma);
    // this.loadDataToForm();

    // this.forma.reset();
    // this.forma.reset({
    //   nombre: 'Juan',
    //   apellido: 'Marciaaaal'
    // });
  }

  loadDataToForm() {
    //lo llamariamos despues de hacer una petición y completaríamos los datos
    this.forma.setValue({
      nombre: 'Pepe',
      apellido: 'Pepon',
      email: 'pepe@email.com',
      direccion: {
        calle: 'De la amargura',
        ciudad: 'Hey',
        pais: 'Narnia'
      }
    });
  }

}
