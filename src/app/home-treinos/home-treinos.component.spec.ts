import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTreinosComponent } from './home-treinos.component';

describe('HomeTreinosComponent', () => {
  let component: HomeTreinosComponent;
  let fixture: ComponentFixture<HomeTreinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTreinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
