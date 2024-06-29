import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YearfilterchartComponent } from './yearfilterchart/yearfilterchart.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicComponent } from './topic/topic.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { SectorComponent } from './sector/sector.component';
import { SwotComponent } from './swot/swot.component';
import { PestalComponent } from './pestal/pestal.component';
import { SourceComponent } from './source/source.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    YearfilterchartComponent,
    TopicComponent,
    CountryComponent,
    CityComponent,
    SectorComponent,
    SwotComponent,
    PestalComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
