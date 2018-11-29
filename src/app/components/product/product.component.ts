import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  item: any = {};
  materials: any = [];
  keys: any = [];
  constructor( private router: ActivatedRoute,
    private _manager: ManagerService,
    private _router: Router) {
      const key = sessionStorage.getItem('key');
      this.router.params.subscribe(params => {
        console.log(params['id']);
         this.getProduct(params['id']);
      });
    }

  ngOnInit() { }

   getProduct(id: string) {
     console.log(sessionStorage.getItem('key'));
    this._manager.getProduct(id, sessionStorage.getItem('key'))
    .subscribe( (product: any) => {
      console.log(product);
      console.log(product.billOfMaterials.paprika);
      this.materials =  Object.values(product.billOfMaterials);
      this.keys =  Object.keys(product.billOfMaterials);
      this.item = product;
    } );
  }

}
