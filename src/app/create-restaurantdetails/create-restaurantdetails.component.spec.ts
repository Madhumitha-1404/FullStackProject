import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestaurantdetailsComponent } from './create-restaurantdetails.component';

describe('CreateRestaurantdetailsComponent', () => {
  let component: CreateRestaurantdetailsComponent;
  let fixture: ComponentFixture<CreateRestaurantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRestaurantdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRestaurantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
