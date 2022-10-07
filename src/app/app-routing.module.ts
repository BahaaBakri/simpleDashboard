import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'activites',
        loadChildren: () => import('./pages/activites/activites.module').then(m => m.ActivitesModule),
      },
      {
        path: 'communications',
        loadChildren: () => import('./pages/communications/communications.module').then(m => m.CommunicationsModule),
      },
      {
        path: 'community',
        loadChildren: () => import('./pages/community/community.module').then(m => m.CommunityModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
      },
      {
        path: 'data',
        loadChildren: () => import('./pages/data/data.module').then(m => m.DataModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule),
      },
      {
        path: 'statistics',
        loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule),
      }
    ]
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
