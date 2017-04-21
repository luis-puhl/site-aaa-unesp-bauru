import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-home-tile',
	templateUrl: './home-tile.component.html',
	styleUrls: ['./home-tile.component.css']
})
export class HomeTileComponent implements OnInit {
	@Input() modalID;
	@Input() tileImgSrc;
	@Input() tileTitle;

	constructor() { }

	ngOnInit() {
	}

}
