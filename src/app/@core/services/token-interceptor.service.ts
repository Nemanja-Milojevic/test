import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req, next){
    const re = '#/login'
    if(req.url.search(re) === -1){let token = this.auth.getToken()
      if (token) {
      // Logged in. Add Bearer token.
      let tokenReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
        })
      return next.handle(tokenReq)
      }

    }else{
      return next.handle(req);
    }
    
    // Not logged in. Continue without modification.
    return next.handle(req);
    }
  }
