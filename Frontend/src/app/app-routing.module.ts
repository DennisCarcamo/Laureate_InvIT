import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesheetComponent } from './create-signature-sheet/createsheet/createsheet.component';
import { UpdatesheetComponent } from './update-signature-sheet/updatesheet/updatesheet.component';
import { PdfsComponent } from "./pdf/pdfs/pdfs.component";
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppComponent } from './app.component';


const routes: Routes = [


	{
		path: 'newsheet',
		component: CreatesheetComponent

	},

	{
		path: 'updatesheet',
		component: UpdatesheetComponent

	},
	{
		path: 'pdf',
		component: PdfsComponent

	},

	{
		path: 'dashboard',
		component: DashboardComponent

	},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
