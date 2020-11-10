import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { VirtualBranchSupportComponent } from './projects/virtual-branch-support/virtual-branch-support.component';
import { WaivethewaitComponent } from './projects/waivethewait/waivethewait.component';
import { CheckrComponent } from './projects/checkr/checkr.component';
import { FilterComponent } from './projects/filter/filter.component';
import { ArblockbotComponent } from './projects/arblockbot/arblockbot.component';
import { CompsaComponent } from './projects/compsa/compsa.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    AboutComponent,
    VirtualBranchSupportComponent,
    WaivethewaitComponent,
    CheckrComponent,
    FilterComponent,
    ArblockbotComponent,
    CompsaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
