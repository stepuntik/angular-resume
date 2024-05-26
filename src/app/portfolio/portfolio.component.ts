import { Component } from '@angular/core';
import projects from '../../assets/data/projects.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projectData: {
    title: string;
    intro: string;
    description: string;
    projectUrl: string;
    sourceUrl: string;
    images: { imageUrl: string; imageDesc: string }[];
  }[] = projects;
}
