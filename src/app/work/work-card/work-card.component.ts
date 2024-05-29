import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css'],
})
export class WorkCardComponent {
  @Input() position: string = '';
  @Input() company: string = '';
  @Input() location: string = '';
  @Input() duration: string = '';
  @Input() responsibilities: string[] = [];

  ngOnInit(): void {
    console.log('Position:', this.position);
  }
}
