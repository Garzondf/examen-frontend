import { Component } from '@angular/core';
import { BibliotecaFormComponent } from './bibliotecas/biblioteca-form/biblioteca-form';
import { LibroTableComponent } from './bibliotecas/libro-table/libro-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BibliotecaFormComponent, LibroTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}