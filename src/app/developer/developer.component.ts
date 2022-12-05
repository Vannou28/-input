import { Component, Input } from '@angular/core';
import { Developer } from '../models/Developer.model';
import { Skill } from '../models/Skill.model';

@Component({
    selector: 'app-developer',
    templateUrl: './developer.component.html',
    styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

    @Input() developer!: Developer;

}
