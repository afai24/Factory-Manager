import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-textileproducts',
  templateUrl: './textileproducts.component.html',
  styleUrls: ['./textileproducts.component.css']
})
export class TextileproductsComponent implements OnInit {

  item: any = {};
  materials: any = [];
  keys: any = [];
  constructor( private router: ActivatedRoute,
    private _manager: ManagerService) {
      const key = sessionStorage.getItem('key');
      this.router.params.subscribe(params => {
        console.log(params['id']);
         this.getProduct(params['id']);
      });
    }
  ngOnInit() {
  }

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
