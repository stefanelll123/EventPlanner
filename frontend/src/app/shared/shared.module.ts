import { NgModule } from '@angular/core';
import { NbMomentDateModule } from '@nebular/moment';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [
  ],
  imports: [
    NbDialogModule.forChild()
  ],
  exports: [
    NbInputModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbCheckboxModule,
    NbDialogModule,
    NbDatepickerModule,

    NbMomentDateModule
  ]
})
export class SharedModule { }
