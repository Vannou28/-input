import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
    newOnomatopia: string ="";
    @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
    onomatopeNameSave:string="Miaou";

    createOnomatopia(){
        console.log(this.onomatopeNameSave);
        this.sendOnomatopiaToParent.emit(this.onomatopeNameSave);
    }
}
