import { Routes } from '@angular/router';
import { PhotosDetail } from './pages/photos-detail/photos-detail';
import { PhotosList } from './pages/photos-list/photos-list';

export const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosList },
  { path: 'photos/:id', component: PhotosDetail },
];
