import { Component, OnInit, Input } from '@angular/core';

import { CarouselItem } from '../carousel-item';

@Component({
	selector: 'app-bootstrap-carousel',
	templateUrl: './bootstrap-carousel.component.html',
	styleUrls: ['./bootstrap-carousel.component.css']
})
export class BootstrapCarouselComponent implements OnInit {
	@Input() itens: CarouselItem[];

	constructor() { }

	ngOnInit() {
	}

}
