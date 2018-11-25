import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './components';
import { BookingService } from './services';

import { MaterialModule } from '../material';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    BookingComponent,
  ],
  exports: [
    BookingComponent,
  ],
  providers: [
    BookingService
  ]
})
export class BookingModule { }
