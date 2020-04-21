import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {
  AngularFireAnalyticsModule,
  APP_NAME,
  APP_VERSION,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  AngularFirePerformanceModule,
  PerformanceMonitoringService,
} from '@angular/fire/performance';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
  ],
  providers: [
    PerformanceMonitoringService,
    ScreenTrackingService,
    { provide: APP_NAME, useValue: 'Changelogger' },
    { provide: APP_VERSION, useValue: '0.0.1' },
    { provide: ORIGIN, useValue: 'https://mc-changelogger.web.app' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
