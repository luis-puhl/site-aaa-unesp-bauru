import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeGestoesComponent } from './home-gestoes/home-gestoes.component';
import { HomeTileComponent } from './home-tile/home-tile.component';
import { HomeTreinosComponent } from './home-treinos/home-treinos.component';
import { HomeTorcidasComponent } from './home-torcidas/home-torcidas.component';
import { HomeProdutosComponent } from './home-produtos/home-produtos.component';
import { BootstrapCarouselComponent } from './bootstrap-carousel/bootstrap-carousel.component';
import { HomeParceirosComponent } from './home-parceiros/home-parceiros.component';
import { HomeGaleriaComponent } from './home-galeria/home-galeria.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HomeGestoesComponent,
		HomeTileComponent,
		HomeTreinosComponent,
		HomeTorcidasComponent,
		HomeProdutosComponent,
		BootstrapCarouselComponent,
		HomeParceirosComponent,
		HomeGaleriaComponent,
		BootstrapModalComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
