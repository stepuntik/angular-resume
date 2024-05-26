import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css'],
})
export class SkillCardComponent {
  @Input() icon!: IconDefinition;
  @Input() text: string = '';
  @Input() color: string = '';

  hovering = false;

  defaultColor = 'black';
  hoverColor = this.color;
}
