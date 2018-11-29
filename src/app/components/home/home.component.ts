import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  business: Object = {
    name: ''
  };

  factories = [{
    key: 'food',
    name: 'food'
  },
  {
    key: 'textiles',
    name: 'textiles'
  }];

  products: any[] = [];
  alert = false;
  login = false;
  factoryName = '';
  constructor( private _manager: ManagerService ) { }

  ngOnInit() {
    const key = sessionStorage.getItem('key');
    if (key !== null) {
      this.login = true;
      this.factoryName = key;
      this._manager.getProducts(key)
      .subscribe((data: any) => {
        this.products = data;
      });
    }
   }

  go(form: NgForm) {
    if (form.value.factory === '') {
      this.alert = true;
    } else {
      this.alert = false;
      this.login = true;
    }
    console.log('value', form.value.factory);
    sessionStorage.setItem('key', form.value.factory);
    this.factoryName = form.value.factory;
    this._manager.getProducts(form.value.factory)
      .subscribe((data: any) => {
        this.products = data;
        console.log(data);
      });

  }

  out() {
    sessionStorage.clear();
    window.location.reload();
  }
}
