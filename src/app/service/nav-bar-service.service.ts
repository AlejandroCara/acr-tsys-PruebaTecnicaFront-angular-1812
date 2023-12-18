import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarServiceService {

  constructor() { }

  //Poner el nav-item pulsado como activo
  navItemClick(route: string){
    let navItems = document.getElementsByClassName("nav-link");
    console.log(route.split("/"))
    //Eliminar la clase active de todos los botones del nav
    for(let i = 0; i < navItems.length; i++){
      if((<HTMLInputElement>navItems[i]).getAttribute("routerLink") == route){
        (<HTMLInputElement>navItems[i]).classList.add("active")
      } else {
        (<HTMLInputElement>navItems[i]).classList.remove("active")
      }
    }

    if (route.split("/")[1] == "character"){
      (<HTMLInputElement>navItems[1]).classList.add("active")
    }
  }
}
