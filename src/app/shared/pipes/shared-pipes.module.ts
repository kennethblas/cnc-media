import { NgModule } from '@angular/core';
import { SafePipeURL } from './url-safe-sanitizer.pipe';

const reusablePipes = [SafePipeURL];

@NgModule({
  declarations: [
    reusablePipes
  ],
  exports: [
    reusablePipes
  ]
})
export class SharedPipesModule { }
