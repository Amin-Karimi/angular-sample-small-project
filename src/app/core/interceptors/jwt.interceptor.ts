import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService)

  if (authService.token) {
    const jwtRequest = req.clone({
      headers: req.headers.set('Authorization', authService.token),
    });

    return next(jwtRequest);
  }

  return next(req);

};
