import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { withoutSaveGuard } from './Guards/without-save.guard';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canDeactivate: [withoutSaveGuard]
  }
];
