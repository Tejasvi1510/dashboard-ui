import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YearfilterchartComponent } from './yearfilterchart/yearfilterchart.component';
import { TopicComponent } from './topic/topic.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { SectorComponent } from './sector/sector.component';
import { SwotComponent } from './swot/swot.component';
import { PestalComponent } from './pestal/pestal.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  {path:"",component:DashboardComponent,
    children:[
      {path:"year",component:YearfilterchartComponent},
      {path:"topic",component:TopicComponent},
      {path:"country",component:CountryComponent},
      {path:"city",component:CityComponent},
      {path:"sector",component:SectorComponent},
      {path:"swot",component:SwotComponent},
      {path:"pestal",component:PestalComponent},
      {path:"source",component:SourceComponent},
      


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
