import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Profile', component: ProfileComponent},
    {path: 'Product', component: ProductComponent},
    {path: '**', component: ProductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
