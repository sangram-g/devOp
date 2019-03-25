import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libstr';


  data = [
    {
      id : 1,
      name: 'Folder1',
      value : false,
      expand: false,
      data : [{
        id : 2,
        name : 'F11',
        value : false,
        expand: false,
        data: [{
          id : 3,
          name: 'F111',
          value : false,
          expand: false,
          data : []
        },
          {
            id : 4,
            name: 'F112',
            value : false,
            expand: false,
            data : []
          },
          {
            id : 5,
            name: 'F113',
            value : true,
            expand: false,
            data : []
          },
        ]
      },
        {
          id : 6,
          name : 'F12',
          value: false,
          expand: false,
          data: []
        },
        {
          id : 7,
          name : 'F13',
          value: false,
          expand: false,
          data: []
        },
        {
          id : 8,
          name : 'F14',
          value: false,
          expand: false,
          data: []
        }
      ]
    },
    {
      id : 9 ,
      name : 'Folder2',
      value: false,
      expand: false,
      data : [{
        id : 10,
        name : 'F21',
        value: false,
        expand: false,
        data: [{
          id : 11,
          name: 'F211',
          value: true,
          expand: false,
          data : [
            {
              id : 12,
              name : 'F2111',
              value: true,
              expand: false,
              data: []
            }
          ],
        },
          {
            id : 13,
            name: 'F212',
            value : true,
            expand: false,
            data: []
          },
          {
            id : 14,
            name: 'F213',
            value: true,
            expand: false,
            data : []
          }
        ]
      },
        {
          id : 15,
          name: 'F22',
          value: true,
          expand: false,
          data: []
        },
        {
          id : 16,
          name: 'F23',
          value: true,
          expand: false,
          data: []
        },
      ]
    },
    {
      id : 17,
      name: 'Folder3',
      value: false,
      expand: false,
      data: [{
        id : 18,
        name : 'F31',
        value: false,
        expand: false,
        data : [{
          id : 19,
          name : 'F311',
          value: true,
          expand: false,
          data: []
        }]
      },
        {
          id : 20,
          name: 'F32',
          value : true,
          expand: false,
          data: []
        },
        {
          id : 21,
          name: 'F33',
          value : true,
          expand: false,
          data : []
        }
      ]
    }

  ];
}
