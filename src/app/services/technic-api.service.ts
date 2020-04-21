import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map, share, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { trace } from '@angular/fire/performance';
import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TechnicApiService {
  request$: (url: string) => Observable<any>;
  launcherVersion$;
  constructor(functions: AngularFireFunctions) {
    this.request$ = functions.httpsCallable('makeRequest');
    this.launcherVersion$ = this.request$(
      'http://api.technicpack.net/launcher/version/stable4'
    ).pipe(map((response) => response.build));
  }

  getPackInfo(apiUrl: string): Observable<any> {
    return this.launcherVersion$.pipe(
      switchMap((build) => this.request$(`${apiUrl}?build=${build}`)),
      trace('packInfo')
    );
  }

  validateSolderPack: AsyncValidatorFn = (control: AbstractControl) => {
    return this.getPackInfo(control.value).pipe(
      map((info) => {
        if (!info.solder) {
          return { solder: true };
        }
        return null;
      })
    );
  };
}
