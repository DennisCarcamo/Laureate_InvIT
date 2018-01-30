import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesheetComponent } from './create-signature-sheet/createsheet/createsheet.component';

const routes: Routes = [


	{
		path: 'newsheet',
		component: CreatesheetComponent

	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
