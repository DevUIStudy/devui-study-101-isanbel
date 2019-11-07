import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AdminFilesChartComponent } from './admin-files-chart/admin-files-chart.component';

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      AdminFilesComponent,
      AdminFilesChartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      DevUIModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
