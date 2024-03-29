import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DiseasesPage} from "./diseases.page";


const routes: Routes = [
  {
    path: '',
    component: DiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseasesRoutingModule {
}
