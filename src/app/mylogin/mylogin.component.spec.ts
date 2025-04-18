import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyloginComponent } from './mylogin.component';

describe('MyloginComponent', () => {
  let component: MyloginComponent;
  let fixture: ComponentFixture<MyloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
