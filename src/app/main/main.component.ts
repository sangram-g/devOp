import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() data;
  @Input() entire;
  rootIndex = 0;
  constructor() { }

  ngOnInit() {
  }
  /*
  Use : Expand Checked on after clicked on ICON
  * */
  expandList(input_data) {
     input_data.value = !input_data.value;
      //  input_data.value = false;
    if(input_data.expand === true) {
      this.recursion(input_data);
    //  input_data.value = true;
    }
  }

  /*
  Use : Click on value toggle value true or false as per clicked
  * */
  folderClicked(input_data) {
    // console.log("Folder clicked:",folder);
    input_data.value = !input_data.value;
  //  input_data.expand = !input_data.expand;
    if(input_data.expand === false) {
     this.recursion(input_data);
    //  input_data.value= false;
    }
  }
  /*
  Use : select value when click in object data
  * */
  selectAllFolder(input_data) {
    if (input_data.value) {
      // input_data.expand = false;
     
      for (let i = 0; i < this.entire.length; i++) {
        let foundFlag = this.UnChecked(this.entire[i], input_data);
        console.log("Flag",foundFlag);
        if (foundFlag === 1) {
          this.deSelectElements(this.entire[i]);
          break;
        }
      }
    } else {
      // input_data.value = false;
      this.recursion(input_data);
    }
  }
/*
Use : recusrion function use  for all tick the checked when click on parent checkbox
* */

  recursion(input_data) {
    if (input_data.data && input_data.data.length > 0) {
      input_data.expand = true;
      input_data.data.forEach(item => {
        this.recursion(item);
      });
    } else {
      // this.selectAllFolder(input_data)
      input_data.expand = true;
    }
  }

  /*
  Use : Unchecked checkbox in recursion
  * */
  UnChecked(input_data, clickedFolder) {
    //  input_data.value = false;
console.log("Console.lo")
    if (input_data.id === clickedFolder.id) {
      return 1;
    } else {
      if (input_data.data && input_data.data.length > 0) {
        let found;
        for (let item of input_data.data) {
          found = this.UnChecked(item, clickedFolder);
          if (found === 1) {
            break;
          }
        }
        if (found === 1) {
          return 1;
        }
      }
    }
  }

  /*
  Use : this function use for disSelected element
  * */
  deSelectElements(input_data) {
    if (input_data.data && input_data.data.length > 0) {
       input_data.expand = false;
      input_data.data.forEach(item => {
        this.deSelectElements(item);
      });
    } else {
      input_data.expand = false; //!input_data.expand;
    }
  }
}
