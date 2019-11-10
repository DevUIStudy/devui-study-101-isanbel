import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AdminFilesChartComponent } from './admin-files-chart/admin-files-chart.component';
import { AdminFilesChartMemberComponent } from './admin-files-chart-member/admin-files-chart-member.component';

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      AdminFilesComponent,
      AdminFilesChartComponent,
      AdminFilesChartMemberComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      DevUIModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
