import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescrip } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
producto: ProductoDescrip={};
id!:string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService
              ) {}

  ngOnInit(): void {

    this.route.params
    .subscribe(parametros=>{
      
      this.productoService.getProducto(parametros['id'])
      .subscribe(producto=>{
        
        this.producto=producto
        this.id=parametros['id']
        console.log(producto)
      })
      
    })
  }
}
