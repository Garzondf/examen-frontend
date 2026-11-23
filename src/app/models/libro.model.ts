export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  añoPublicacion: number;
}

export interface LibroConBiblioteca extends Libro {
  bibliotecaNombre: string;
}