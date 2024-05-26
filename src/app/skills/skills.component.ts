import { Component } from '@angular/core';
import {
  faReact,
  faHtml5,
  faCss3,
  faGit,
  faNodeJs,
  faJs,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
// import { faRedux, faTypescript, faDatabase, faFire, faJest, faWebpack } from '@fortawesome/free-brands-svg-icons';

import { faFire, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillData = [
    { icon: faReact, text: 'React.js', color: '#149ECA' },
    { icon: faHtml5, text: 'HTML', color: '#E34F26' },
    { icon: faCss3, text: 'CSS', color: '#1572B6' },
    { icon: faGit, text: 'Git', color: '#F05032' },
    { icon: faNodeJs, text: 'Node.js', color: '#8CC84B' },
    { icon: faJs, text: 'JavaScript', color: '#F7DF1E' }, // This line is uncommented now
    { icon: faDatabase, text: 'MongoDB', color: '#4DB33D' },
    { icon: faFire, text: 'Firebase', color: '#FFCA28' },
    { icon: faNpm, text: 'NPM', color: '#CB3837' },
    // { icon: faRedux, text: 'Redux', color: '#764ABC' },
    // { icon: faTypescript, text: 'TypeScript', color: '#3178C6' },
    // { icon: faDatabase, text: 'Mongoose', color: '#4DB33D' }, // Assuming Mongoose uses the same icon as MongoDB
    // { icon: faJest, text: 'Jest', color: '#C21325' },
    // { icon: faWebpack, text: 'Webpack', color: '#8DD6F9' },
    // { icon: '<svg>...</svg>', text: 'More coming...', color: '#2b358d' },
  ];
}
