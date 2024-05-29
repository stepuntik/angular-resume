import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() intro: string = '';
  @Input() description: string = '';
  @Input() projectUrl: string = '';
  @Input() sourceUrl: string = '';
  @Input() image: { imageUrl: string; imageDesc: string } = {
    imageUrl: '',
    imageDesc: '',
  };
}
