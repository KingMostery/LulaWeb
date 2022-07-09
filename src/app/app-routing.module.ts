import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollageComponent } from './pages/collage/collage.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  { path: 'home', component: CollageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
