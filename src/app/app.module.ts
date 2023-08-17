import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent,routingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,

  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
