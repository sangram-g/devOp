import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() data;
  @Input() entire;
  rootIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  /*
  Use : Click on value toggle value true or false as per clicked
  * */
  folderClicked(input_data) {
    // input_data.value = !input_data.value;
    input_data.expand = !input_data.expand;
  }

  /*
  Use : select value when click in object data
  * */
  selectAllFolder(input_data) {
    console.log('input data', input_data);
    if (!input_data.value) {
      let foundFlag = this.UnChecked(this.entire, input_data);
    } else {
    
      this.recursion(input_data);
    }
  }

  /*
  Use : recusrion function use  for all tick the checked when click on parent checkbox
  * */

  recursion(input_data) {
    if (input_data.data && input_data.data.length > 0) {
      input_data.value = true;
      input_data.data.forEach(item => {
        this.recursion(item);
      });
    } else {
      input_data.value = true;
    }
  }

  /*
  Use : Unchecked checkbox in recursion
  * */
  UnChecked(Entire, clickedFolder) {
    for (let i = 0; i < Entire.length; i++) {
      if (Entire[i].id === clickedFolder.id)
        return 1;
      else {
        if (Entire[i].data && Entire[i].data.length > 0) {
          let found = this.UnChecked(Entire[i].data, clickedFolder);
          if (found === 1) {
            Entire[i].value = false;
            return 1;
          }
        }
      }
    }
  }
  /*
  Use : this function use for disSelected element
  * */
  deSelectElements(input_data) {
    if (input_data.data && input_data.data.length > 0) {
      input_data.value = false;
      input_data.data.forEach(item => {
        this.deSelectElements(item);
      });
    } else {
      input_data.expand = false; //!input_data.expand;
    }
  }
}























//   /*
//   Use : Expand Checked on after clicked on ICON
//   * */
//  expandList(input_data) {
//   input_data.value = !input_data.value;
//   //  input_data.expand = false;
//   if(input_data.expand === false) {
//     this.recursion(input_data);
//   //  input_data.expand = false;
//   }
// }
