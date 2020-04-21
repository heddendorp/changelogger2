import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechnicApiService } from './services/technic-api.service';
import {
  debounce,
  debounceTime,
  filter,
  map,
  share,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  packForm: FormGroup;
  progress$;
  constructor(
    private fb: FormBuilder,
    private technicService: TechnicApiService
  ) {
    this.packForm = this.fb.group({
      apiUrl: [
        '',
        Validators.pattern(
          /http:\/\/api.technicpack.net\/modpack\/([a-z\-0-9])+\/?/
        ),
        this.technicService.validateSolderPack,
      ],
    });
    this.progress$ = this.packForm.statusChanges.pipe(
      map((status) => (status === 'PENDING' ? 'indeterminate' : 'determinate'))
    );
  }

  getErrorMessage() {
    if (this.packForm.get('apiUrl').hasError('required')) {
      return 'You must enter a value';
    }
    if (this.packForm.get('apiUrl').hasError('pattern')) {
      return 'The URL should look like http://api.technicpack.net/modpack/[yourpack]';
    }
    if (this.packForm.get('apiUrl').hasError('solder')) {
      return 'The pack has to be solder enabled for this to work';
    }

    return '';
  }

  ngOnInit(): void {}
}
