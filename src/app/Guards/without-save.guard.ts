import { CanDeactivateFn } from '@angular/router';
import { AppComponent } from '../app.component';

export const withoutSaveGuard: CanDeactivateFn<AppComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.tieneCambios()) {
    return confirm('⚠ Tienes cambios sin guardar. ¿Seguro que quieres salir?');
  }
  return true;
};
