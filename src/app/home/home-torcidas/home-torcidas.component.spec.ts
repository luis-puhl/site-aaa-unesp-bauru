import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTorcidasComponent } from './home-torcidas.component';

describe('HomeTorcidasComponent', () => {
  let component: HomeTorcidasComponent;
  let fixture: ComponentFixture<HomeTorcidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTorcidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTorcidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
