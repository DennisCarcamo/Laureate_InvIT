import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreatesheetComponent } from './createsheet/createsheet.component';

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
