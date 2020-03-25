import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@app/models/project.model';
import { DefaultImg } from '../../../../assets/default-img.const';

@Component({
  selector: 'app-editable-project',
  templateUrl: './editable-project.component.html',
  styleUrls: ['./editable-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableProjectComponent implements OnInit {
  @Input() projectType: string;
  @Input() project: Project;
  @Input() editable = true;
  @Output() deleted = new EventEmitter<Project>();
  @Output() edited = new EventEmitter<Project>();

  public defaultImg: string = DefaultImg;
  public link: string;

  constructor() {}

  ngOnInit() {
    this.setupLink();
  }

  onDelete() {
    this.deleted.emit(this.project);
  }

  onEdit() {
    this.edited.emit(this.project);
  }

  private setupLink(): void {
    this.link =
      this.projectType === 'course' ? this.project.link : '/content-management/' + this.project.link + '/edit';
  }
}
