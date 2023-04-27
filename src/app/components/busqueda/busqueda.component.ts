import { Component, OnInit } from '@angular/core';
import { ApiPeliculasService } from 'src/app/services/apiPeliculas/api-peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listaPeliculas:any;
  mostrarDatos = false;
  datos = {
    titulo:null,
    anio:null,
    actor:null,
    descripcion:null,
    tipo:null,
    id:null,
    img:null
  };
  constructor(private db:ApiPeliculasService) { }

  async ngOnInit() {
    const res = await this.db.traerTodo("peliculas");
    res?.subscribe({
      next: (res) => {
        let lista = res.map((pelicula: any) => pelicula.payload.doc.data());
        this.listaPeliculas = lista;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cargarDatos(event:any){
    this.mostrarDatos = true;
    this.datos = event;
  }

  editarPelicula() {
    console.log(this.datos)
  }
}
