import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BibliotecaService } from '../../services/biblioteca';
import { LibroConBiblioteca } from '../../models/libro.model';

@Component({
  selector: 'app-libro-table',
  standalone: true,
  templateUrl: './libro-table.html',
  styleUrl: './libro-table.css'
})
export class LibroTableComponent implements OnInit {
  private service = inject(BibliotecaService);

  status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  libros = signal<LibroConBiblioteca[]>([]);
  message = signal('');

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.status.set('loading');

    this.service.list().subscribe({
      next: bibliotecas => {
        const listaPlana: LibroConBiblioteca[] = bibliotecas.flatMap(bib =>
          (bib.libros ?? []).map(libro => ({
            ...libro,
            bibliotecaNombre: bib.nombre
          }))
        );
        this.libros.set(listaPlana);
        this.status.set('success');
      },
      error: (err: HttpErrorResponse) => {
        this.message.set(err.error?.message ?? 'Error al cargar los datos.');
        this.status.set('error');
      }
    });
  }
}