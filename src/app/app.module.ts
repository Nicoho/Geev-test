import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesComponent } from './species/species.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { SpecieItemComponent } from './specie-item/specie-item.component';
import { Routes, RouterModule } from '@angular/router';
import { PeopleItemComponent } from './people-item/people-item.component';

const appRoutes: Routes = [
  { path: 'species/:id', component:PeopleComponent},
  { path: '', component: SpeciesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    PeopleComponent,
    SpecieItemComponent,
    PeopleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
