import { NgModule } from '@angular/core';
import { NbMomentDateModule } from '@nebular/moment';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';

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
    NbMomentDateModule,
    NbTabsetModule,
    NbAccordionModule
  ]
})
export class SharedModule { }
