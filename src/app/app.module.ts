import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OrganiserdebatComponent } from './organiserdebat/organiserdebat.component';
import { TousdebatsComponent } from './tousdebats/tousdebats.component';
import { DebatlibreComponent } from './debatlibre/debatlibre.component';
import { DebatguideComponent } from './debatguide/debatguide.component';
//vote components
import { VoteChartComponent } from './vote-chart/vote-chart.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChartFormsComponent } from './chart-forms/chart-forms.component';
//highcharts component
import { HighchartsChartModule } from "highcharts-angular";
//routing
import { AppRoutingModule } from './app-routing.module';
//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio';
//slider
import { NgImageSliderModule } from 'ng-image-slider';
//Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Debats } from './Models/Debats';
import { ForumsService } from './services/forums.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    OrganiserdebatComponent,
    TousdebatsComponent,
    DebatlibreComponent,
    DebatguideComponent,
    VoteChartComponent,
    ButtonsComponent,
    ChartFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    NgImageSliderModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    HighchartsChartModule,
    ReactiveFormsModule,
    
  ],
  providers: [Debats,ForumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
