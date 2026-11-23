import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca, NewBiblioteca } from '../models/biblioteca.model';

@Injectable({ providedIn: 'root' })
export class BibliotecaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/bibliotecas';

  list(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.apiUrl);
  }

  create(biblioteca: NewBiblioteca): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.apiUrl, biblioteca);
  }
}