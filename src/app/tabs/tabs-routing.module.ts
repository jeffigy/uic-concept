import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth/auth-guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../homeTab/tab1.module').then(m => m.Tab1PageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'tab2',
        loadChildren: () => import('../notificationsTab/tab2.module').then(m => m.Tab2PageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../profileTab/tab3.module').then(m => m.Tab3PageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'tab4',
        loadChildren: () => import('../eventsTab/tab4.module').then(m => m.Tab4PageModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'tab5',
        loadChildren: () => import('../classesTab/tab4.module').then(m => m.Tab4PageModule),
        canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
