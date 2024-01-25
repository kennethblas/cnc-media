import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoManagerService } from '../../shared/services/video-manager/video-manager.service';
import { Subject, takeUntil } from 'rxjs';
import { VideoModel } from '../../core/models/video.model';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzImageModule } from 'ng-zorro-antd/image';
import { isNotNil } from 'ramda';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { FilterCategoryOptions } from '../../core/models/filter-options.model';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';

@Component({
  selector: 'app-stream',
  standalone: true,
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss',
  imports: [
    CommonModule, 
    NzLayoutModule, 
    NzGridModule, 
    NzAvatarComponent, 
    NzImageModule,
    NzIconModule,
    NzTagModule,
    SharedPipesModule
  ], 
})
export class StreamComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();

  selectedVideoToStream!: VideoModel;

  constructor(private videoManagerService: VideoManagerService) {}

  get categoryColorTag(): string {
    const category = FilterCategoryOptions.find(option => option.value === this.selectedVideoToStream.category);
    return category ? category.color : ''; 
  }

  ngOnInit(): void {
    this.videoManagerService.selectedVideo$.pipe(
      takeUntil(this._onDestroy$)
    ).subscribe((video: (VideoModel | null)) => {
      if (isNotNil(video)) {
        this.selectedVideoToStream = video;
      }
    });
  }

  ngOnDestroy() {
		this._onDestroy$.next();
		this._onDestroy$.complete();
		this._onDestroy$.unsubscribe();
	}
}
