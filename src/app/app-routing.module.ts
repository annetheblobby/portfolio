import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from 'src/app/work/work.component';
import { AboutComponent } from './about/about.component';
import { VirtualBranchSupportComponent } from './projects/virtual-branch-support/virtual-branch-support.component';
import { WaivethewaitComponent } from './projects/waivethewait/waivethewait.component';
import { CheckrComponent } from './projects/checkr/checkr.component';
import { FilterComponent } from './projects/filter/filter.component';

const routes: Routes = [

  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'virtual-branch-support', component: VirtualBranchSupportComponent },
  { path: 'waivethewait', component: WaivethewaitComponent },
  { path: 'checkr', component: CheckrComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
