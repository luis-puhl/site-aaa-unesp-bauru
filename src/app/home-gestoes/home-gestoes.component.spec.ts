import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGestoesComponent } from './home-gestoes.component';

describe('HomeGestoesComponent', () => {
  let component: HomeGestoesComponent;
  let fixture: ComponentFixture<HomeGestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
