import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { UserComponent } from '../../user/user.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class SharedModule {}
