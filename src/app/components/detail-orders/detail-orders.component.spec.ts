import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrdersComponent } from './detail-orders.component';

describe('DetailOrdersComponent', () => {
  let component: DetailOrdersComponent;
  let fixture: ComponentFixture<DetailOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOrdersComponent]
    });
    fixture = TestBed.createComponent(DetailOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
