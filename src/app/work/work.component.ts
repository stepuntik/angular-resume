import { Component } from '@angular/core';
import works from '../../assets/data/workExperience.json';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent {
  workData: {
    position: string;
    company: string;
    location: string;
    duration: string;
    responsibilities: string[];
  }[] = works;
}
