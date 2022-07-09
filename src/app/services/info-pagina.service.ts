import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargado = false;
  materiales: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarInfo();
    this.CargarMeteriales();
  }

  private CargarInfo() {
    

    //leer el archivo JSON
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargado = true;
        this.info = resp;
      });
  }

  private CargarMeteriales() {
    //leer el archivo JSON
    this.http
      .get(
        'https://lulaccesorios-b887d-default-rtdb.firebaseio.com/Materiales.json'
      )
      .subscribe((resp:any) => {
        this.materiales = resp;
        //console.log(resp);
      });
  }
}
