import { NgModule } from '@angular/core';
import { VideoCardsComponent } from './video-cards/video-cards.component';
import { NgZorroModule } from '../modules/ng-zorro.module';
import { FilterTagsComponent } from './filter-tags/filter-tags.component';

const reusableSharedComponents = [
  VideoCardsComponent,
  FilterTagsComponent
];

@NgModule({
  declarations: [
    reusableSharedComponents,
    FilterTagsComponent
  ],
  imports: [
    NgZorroModule
  ],
  exports: [
    reusableSharedComponents
  ]
})
export class SharedComponentsModule { }
