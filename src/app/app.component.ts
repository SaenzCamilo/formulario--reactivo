import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miFormulario!: FormGroup;
  formGuardActive = true;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      aceptaTerminos: [false, Validators.requiredTrue]
    });
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.marcarControlesComoTocados();
      return;
    }
    console.log('✅ Formulario válido:', this.miFormulario.value);
    alert('Formulario enviado con éxito');
    this.miFormulario.reset();
    this.formGuardActive = false;
  }

  private marcarControlesComoTocados() {
    Object.values(this.miFormulario.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  tieneCambios(): boolean {
    return this.formGuardActive && this.miFormulario.dirty;
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: BeforeUnloadEvent) {
    if (this.tieneCambios()) {
      event.preventDefault();
      event.returnValue = ''; 
    }
  }
}
