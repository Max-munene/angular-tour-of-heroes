import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

const routes: Routes = [
  { path: 'child', component: ChildComponentComponent },
  { path: 'parent', component: ParentComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  ChildComponentComponent,
  ParentComponentComponent,
];
