import {NgModule} from '@angular/core';

import {MyDirective} from './directive';

@NgModule({
  declarations: [MyDirective],
  exports: [MyDirective],
})
export class MyModule {}

export {MyDirective};