import {  CdkDragDrop, moveItemInArray,transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';
import {Board} from 'src/app/models/modelitem'
import {Column} from 'src/app/models/column-Model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

 export class HomeComponent {

constructor(){}
board:Board=new Board('Test Board',[
  new Column('Ideas',[
"Some random ideas",
"This is new ideas",
"Bulid some appliction"
  ]),
  new Column('Todo',[
    'StayHome',
    'StaySafe',
    'Positive',
    'Negative'
      ]),
      new Column('Item',[
        "Lorem Ipsam",
        "Get Up ",
        "Wake Up"
          ]),
      
])


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
 
    
