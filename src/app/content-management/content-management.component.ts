import { Component, OnInit } from '@angular/core';
import { QueryService } from '@app/core';
@Component({
  selector: 'app-course-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {
  constructor(private queryService: QueryService) {}

  ngOnInit() {}

  public postApiTest(): void {
    this.queryService.postJSONData('script', { param: 'test' }).subscribe(result => console.log(result));
  }
}
