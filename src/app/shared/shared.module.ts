import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'angular-bootstrap-md';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from './components/loader/loader.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { RouterModule } from '@angular/router';
import { EditableProjectComponent } from './components/editable-project/editable-project.component';

@NgModule({
  imports: [CommonModule, CardsModule, RouterModule, NgbAccordionModule],
  declarations: [LoaderComponent, ProjectComponent, ProjectsListComponent, EditableProjectComponent],
  exports: [LoaderComponent, ProjectComponent, ProjectsListComponent, EditableProjectComponent]
})
export class SharedModule {}
