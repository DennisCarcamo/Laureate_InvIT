import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesheetComponent } from './create-signature-sheet/createsheet/createsheet.component';
import { UpdatesheetComponent } from './update-signature-sheet/updatesheet/updatesheet.component';
import { PdfsComponent } from "./pdf/pdfs/pdfs.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoanAComponent } from './loan-admin/loan-a/loan-a.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { LifetimeChartComponent } from './lifetime-chart/lifetime-chart.component';
import { LoanAssetsComponent } from './pdf/loan-assets/loan-assets.component';
import { LicenseListComponent } from './license/license-list/license-list.component';
import { LicenseRelationshipComponent } from './license/license-relationship/license-relationship.component';
import { ReporteComponent } from './license/reporte/reporte.component'; 
import { BitlyLoginComponent } from './bitly-login/bitly-login.component';
import { MainBitlyComponent } from './main-bitly/main-bitly.component';
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

	{
		path: 'loan',
		component: LoanAComponent

	},

	{
		path: '',
		component: LoginComponent

	},

	
	{
		path: 'admin',
		component: UserAdminComponent

	},

	{
		path: 'tables',
		component: DashboardTablesComponent

	},

	{
		path: 'lifetime',
		component: LifetimeChartComponent

	},

	{
		path: 'loansheets',
		component: LoanAssetsComponent

	},
	{
		path: 'license-list',
		component: LicenseListComponent

	},

	{
		path: 'license-workstations/:licenseId',
		component: LicenseRelationshipComponent

	},
	{
		path: 'report',
		component: ReporteComponent

	},
	{
		path: 'blogin',
		component: BitlyLoginComponent

	},
	{
		path: 'mainbitly',
		component: MainBitlyComponent

	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
