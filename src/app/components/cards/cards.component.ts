import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any[] = [];
  key = '';
  constructor( private router: Router ) {
    this.key = sessionStorage.getItem('key');
  }

  viewProduct(id: any) {
    console.log(id);
    const key = sessionStorage.getItem('key');
    switch (key) {
      case 'food':
      this.router.navigate([ '/product', id ]);
      break;
      case 'textiles':
      this.router.navigate([ '/textileproduct', id ]);
      break;
    }
  }
}
