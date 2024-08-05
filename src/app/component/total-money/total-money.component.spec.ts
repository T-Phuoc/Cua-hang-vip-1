import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMoneyComponent } from './total-money.component';

describe('TotalMoneyComponent', () => {
  let component: TotalMoneyComponent;
  let fixture: ComponentFixture<TotalMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
