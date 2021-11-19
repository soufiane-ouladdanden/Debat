import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { TousdebatsComponent } from './tousdebats/tousdebats.component';
import { OrganiserdebatComponent } from './organiserdebat/organiserdebat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DebatlibreComponent } from './debatlibre/debatlibre.component';
import { VoteChartComponent } from './vote-chart/vote-chart.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'organiserdebat', component: OrganiserdebatComponent },
  { path:'tousdebats', component: TousdebatsComponent },
  { path:'header', component: HeaderComponent },
  { path:'footer', component: FooterComponent },
  { path:'debatlibre/:id', component: DebatlibreComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path:'vote-chart', component: VoteChartComponent},

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
