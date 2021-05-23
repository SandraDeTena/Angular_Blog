import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponentComponent,
    FormularioComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
