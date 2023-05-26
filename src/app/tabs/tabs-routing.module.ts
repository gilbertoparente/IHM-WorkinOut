import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'treinar',
        loadChildren: () => import('../treinar/treinar.module').then(m => m.TreinarPageModule)
      },
      {
        path: 'planos',
        loadChildren: () => import('../planos/planos.module').then(m => m.PlanosPageModule)
      },
      {
        path: 'login',
            loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'criar-planos',
            loadChildren: () => import('../criar-planos/criar-planos.module').then(m => m.CriarPlanosPageModule)
      },
      {
        path: 'planos-resumo',
            loadChildren: () => import('../planos-resumo/planos-resumo.module').then(m => m.PlanosResumoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
