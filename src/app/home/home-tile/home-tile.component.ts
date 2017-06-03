import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-home-tile',
	templateUrl: './home-tile.component.html',
	styleUrls: ['./home-tile.component.css']
})
export class HomeTileComponent implements OnInit {

	@Input()
	public modalID;

	@Input()
	public tileImgSrc;

	@Input()
	public tileTitle;

	constructor() { }

	ngOnInit() {
	}

}
