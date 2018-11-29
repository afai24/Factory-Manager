import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileproductsComponent } from './textileproducts.component';

describe('TextileproductsComponent', () => {
  let component: TextileproductsComponent;
  let fixture: ComponentFixture<TextileproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextileproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextileproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
