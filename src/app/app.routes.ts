import { Routes } from '@angular/router';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CvPreviewComponent } from './components/cv-preview/cv-preview.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: CvFormComponent },
  { path: 'edit/:id', component: CvFormComponent },
  { path: 'preview/:id', component: CvPreviewComponent }
];