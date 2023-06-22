import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PgeNotFoundComponent } from './pge-not-found/pge-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title:'MyPortFolio | home'},
  { path: 'about', component: AboutComponent, title:'MyPortFolio | about'},
  { path: 'portfolio', component: PortfolioComponent, title:'MyPortFolio | portfolio'},
  { path: 'pdetail', component: PortfolioDetailComponent, title:'MyPortFolio | portfolio detail'},
  { path: 'resume', component: ResumeComponent, title:'MyPortFolio | Personal Profile'},
  { path: 'contact', component: ContactComponent, title:'MyPortFolio | contact'},
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'**', component:PgeNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
