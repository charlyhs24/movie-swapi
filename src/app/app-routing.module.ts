import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: () => import('./page/character/character.module').then(m => m.CharacterPageModule)
  },
  {
    path: 'character-detail/:id',
    loadChildren: () => import('./page/character-detail/character-detail.module').then(m => m.CharacterDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
