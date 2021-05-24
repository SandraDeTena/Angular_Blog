import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hero' },
  { path: 'hero', component: HeroComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'error404', component: Error404Component },
  { path: '**', redirectTo: 'error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
