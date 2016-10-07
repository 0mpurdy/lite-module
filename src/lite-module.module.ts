import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { LiteComponent } from './components';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ LiteComponent ],
  exports:      [ LiteComponent ],
  providers:    [  ]
})
export class LiteModule { }
