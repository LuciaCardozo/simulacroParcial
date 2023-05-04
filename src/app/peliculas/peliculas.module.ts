import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { AppModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaPeliculaComponent } from '../shared/tabla-pelicula/tabla-pelicula.component';

@NgModule({
  declarations: [
    PeliculaAltaComponent,
    PeliculaListadoComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PeliculasModule { }
