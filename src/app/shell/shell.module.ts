import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from 'angular-bootstrap-md';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, NavbarModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
