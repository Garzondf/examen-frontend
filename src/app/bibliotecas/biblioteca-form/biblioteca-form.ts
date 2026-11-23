import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NewBiblioteca } from '../../models/biblioteca.model';
import { BibliotecaService } from '../../services/biblioteca';

@Component({
  selector: 'app-biblioteca-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './biblioteca-form.html',
  styleUrl: './biblioteca-form.css'
})
export class BibliotecaFormComponent {
  private fb = inject(FormBuilder);
  private service = inject(BibliotecaService);

  @Output() created = new EventEmitter<void>();

  saving = signal(false);
  message = signal('');

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    ciudad: ['', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving.set(true);
    this.message.set('');
    const nuevaBiblioteca: NewBiblioteca = this.form.getRawValue();

    this.service.create(nuevaBiblioteca).subscribe({
      next: () => {
        this.saving.set(false);
        this.message.set('Biblioteca registrada.');
        this.form.reset();
        this.created.emit();
      },
      error: (err: HttpErrorResponse) => {
        this.saving.set(false);
        this.message.set(err.error?.message ?? 'Error al registrar la biblioteca.');
      }
    });
  }
}