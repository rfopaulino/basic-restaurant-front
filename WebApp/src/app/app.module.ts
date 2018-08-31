import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, ModuleWithComponentFactories } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular/main';
import { ROUTES } from './app.route';
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorService } from './error.service';
import { ShowErrorsComponent } from './error.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import { AgGridClickEditComponent } from './ag-grid.click.edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { RestauranteGridComponent } from './restaurante/grid/restaurante.grid.component';
import { RestauranteNewComponent } from './restaurante/new/restaurante.new.component';
import { RestauranteEditComponent } from './restaurante/edit/restaurante.edit.component';
import { PratoGridComponent } from "./prato/grid/prato.grid.component";
import { PratoNewComponent } from './prato/new/prato.new.component';
import { PratoEditComponent } from './prato/edit/prato.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShowErrorsComponent,
    AlertComponent,
    AgGridClickEditComponent,
    RestauranteGridComponent,
    RestauranteNewComponent,
    RestauranteEditComponent,
    PratoGridComponent,
    PratoNewComponent,
    PratoEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AgGridModule.withComponents([AgGridClickEditComponent]),
    TextMaskModule
  ],
  providers: [
    ErrorService,
    AlertService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
