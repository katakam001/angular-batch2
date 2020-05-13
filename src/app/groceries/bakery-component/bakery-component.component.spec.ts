import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryComponentComponent } from './bakery-component.component';

describe('BakeryComponentComponent', () => {
  let component: BakeryComponentComponent;
  let fixture: ComponentFixture<BakeryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
