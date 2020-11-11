import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkComponent } from 'src/app/work/work.component';
import { AboutComponent } from './about/about.component';
import { VirtualBranchSupportComponent } from './projects/virtual-branch-support/virtual-branch-support.component';
import { WaivethewaitComponent } from './projects/waivethewait/waivethewait.component';
import { CheckrComponent } from './projects/checkr/checkr.component';
import { FilterComponent } from './projects/filter/filter.component';
import { ArblockbotComponent } from './projects/arblockbot/arblockbot.component';
import { CompsaComponent } from './projects/compsa/compsa.component';
import { FunComponent } from './fun/fun.component';
import { PaperComponent } from './fun/funProjects/paper/paper.component';
import { ShadowPuppetryComponent } from './fun/funProjects/shadow-puppetry/shadow-puppetry.component';
import { LighthouseComponent } from './fun/funProjects/lighthouse/lighthouse.component';
import { CsearchComponent } from './fun/funProjects/csearch/csearch.component';
import { SketchComponent } from './fun/funProjects/sketch/sketch.component';
import { VectorComponent } from './fun/funProjects/vector/vector.component';

const routes: Routes = [

  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: 'work', component: WorkComponent },
  { path: 'fun', component: FunComponent },
  { path: 'virtual-branch-support', component: VirtualBranchSupportComponent },
  { path: 'waivethewait', component: WaivethewaitComponent },
  { path: 'checkr', component: CheckrComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'arblockbot', component: ArblockbotComponent },
  { path: 'compsa', component: CompsaComponent },
  { path: 'paper', component: PaperComponent },
  { path: 'shadowPuppetry', component: ShadowPuppetryComponent },
  { path: 'lighthouse', component: LighthouseComponent },
  { path: 'csearch', component: CsearchComponent },
  { path: 'sketch', component: SketchComponent },
  { path: 'vector', component: VectorComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
