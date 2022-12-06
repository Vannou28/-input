import { Component } from '@angular/core';
import { Developer } from './models/Developer.model';
import { Skill } from './models/Skill.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    onomatopoeiaList: string[] = ["Bzz", "Hi-han", "Glou glou", "Coin-coin"]


    onReceiveNewOnomatopia(event: string) {
        this.onomatopoeiaList.push(event);
    }









    /****************************************************************************************** 
     * 
     * 07 - Communication entre les composants : @Input
     * 
    *******************************************************************************************/

    title = 'communication';
    lastNameSave: string = "";
    firstNameSave: string = "";
    ageSave?: number;
    genderSave: string = "";
    bioSave: string = "";
    developerDetails: Developer = new Developer(
        "Van",
        "Aurélien",
        39,
        "Masculin",
        "je sais pas",
        [
            new Skill("php", "https://forum.phpfrance.com/styles/PHPfrance/theme/phpfrance-logo.png", "https://forum.phpfrance.com/"),
            new Skill("java", "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png", "https://www.java.com/fr/"),
            new Skill("javascript", "https://miro.medium.com/max/1400/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg", "https://www.javascript.com/")
        ]
    );

    skills = [
        new Skill("php", "https://forum.phpfrance.com/styles/PHPfrance/theme/phpfrance-logo.png", "https://forum.phpfrance.com/"),
        new Skill("java", "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png", "https://www.java.com/fr/"),
        new Skill("javascript", "https://miro.medium.com/max/1400/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg", "https://www.javascript.com/")
    ];

    saveDeveloper() {
        this.developerDetails = new Developer(
            this.lastNameSave,
            this.firstNameSave,
            this.ageSave,
            this.genderSave,
            this.bioSave,
            this.skills
        );

    }
}
