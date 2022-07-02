import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrls: ['./collage.component.css']
})
export class CollageComponent implements OnInit {

  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
  }

}
