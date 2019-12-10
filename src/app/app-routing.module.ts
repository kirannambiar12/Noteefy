import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NotesComponent } from './notes/notes.component';
import { ListComponent } from './list/list.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent,
children:[ {path: 'notes', component: NotesComponent},
            {path: 'list', component: ListComponent},
            {path: 'map', component: DisplayComponent}          
]
},
  

{path: 'nav', component: SideNavComponent},
    

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
