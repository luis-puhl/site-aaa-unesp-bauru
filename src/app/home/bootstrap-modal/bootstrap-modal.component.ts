import { Component, OnInit, Input } from '@angular/core';

import { BootstrapModalData } from './bootstrap-modal-data';

@Component({
	selector: 'app-bootstrap-modal',
	templateUrl: './bootstrap-modal.component.html',
	styleUrls: ['./bootstrap-modal.component.css']
})
export class BootstrapModalComponent implements OnInit {
	@Input() public modalData: BootstrapModalData;

	constructor() { }

	ngOnInit() {
	}

}
