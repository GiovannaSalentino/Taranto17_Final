import { Component, ViewEncapsulation } from '@angular/core';
import { BrancoComponent } from './branco/branco.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Taranto17';

  items = [
    {
        label:'Branco',
        icon:'pi pi-fw pi-box',
        items:[
            {
                label:'Chi siamo',
                command:()=>{this.vaiInBranco();},
                icon:'pi pi-fw pi-id-card',
            },
            {
              label:'info',
              icon:'pi pi-fw pi-info-circle'
            },
            {
                separator:true
            },
            {
              label:'iscriviti',
              icon:'pi pi-fw pi-user-plus'
            }
        ]
    },
    {
        label:'Reparto',
        icon:'pi pi-fw pi-box',
        items:[
          {
             label:'Chi siamo',
             icon:'pi pi-fw pi-id-card',
           },
            {
                label:'Squadriglie',
                icon:'pi pi-fw pi-users',
                items: [
                {
                    label:'Sq. Leoni'
                },
                {
                    label:'Sq. Falchi'
                },
                {
                    label:'Sq. Lupi'
                },
                {
                  label:'Sq. Gazzelle'
                },
                {
                  label:'Sq. Rondini'
                },
                ]
            },
            {
              label:'info',
              icon:'pi pi-fw pi-info-circle'
            },
            {
              label:'iscriviti',
              icon:'pi pi-fw pi-user-plus'
            },
        ]
    },
    {
        label:'Clan',
        icon:'pi pi-fw pi-box',
        items:[
          {
            label:'Chi siamo',
            icon:'pi pi-fw pi-id-card',
            items:[
              {
                label:'Noviziato'
              },
              {
                label:'Clan'
              }
            ]
          },
          {
            label:'info',
            icon:'pi pi-fw pi-info-circle'
          },
          {
            label:'iscriviti',
            icon:'pi pi-fw pi-user-plus'
          },
        ]
    },
    {
      label:'Comunità Capi',
      icon:'pi pi-fw pi-box',
      items:[
        {
          label:'Chi siamo',
          icon:'pi pi-fw pi-id-card',
        },
        {
          label:'Staff',
          icon:'pi pi-fw pi-users',
          items:[
            {
              label:'Staff L/C',
            },
            {
              label:'Staff E/G',
            },
            {
              label:'Staff R/S',
            },
          ]
        }
      ]
    },

    {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                {
                    label:'Save',
                    icon:'pi pi-fw pi-calendar-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-calendar-minus'
                },

                ]
            },
            {
                label:'Archieve',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                {
                    label:'Remove',
                    icon:'pi pi-fw pi-calendar-minus'
                }
                ]
            }
        ]
    },
    {
      label:'Shop',
      icon:'pi pi-fw pi-shopping-bag',
    }
];
vaiInBranco(){
  this.router.navigate(["branco"]);
}


}


