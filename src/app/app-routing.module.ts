import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'criar-planos',
    loadChildren: () => import('./criar-planos/criar-planos.module').then( m => m.CriarPlanosPageModule)
  },
  {
    path: 'planos-resumo',
    loadChildren: () => import('./planos-resumo/planos-resumo.module').then(m => m.PlanosResumoPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  {
    path: 'editar-planos',
    loadChildren: () => import('./editar-planos/editar-planos.module').then( m => m.EditarPlanosPageModule)
  }

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
