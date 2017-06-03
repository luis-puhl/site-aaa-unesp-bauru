import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { HomeGaleriaComponent } from './home-galeria.component';

describe('HomeGaleriaComponent', () => {
	let component: HomeGaleriaComponent;
	let fixture: ComponentFixture<HomeGaleriaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ AppModule ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeGaleriaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
