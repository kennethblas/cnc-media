import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { VideoModel } from '../../core/models/video.model';
import { FilterCategoryOptions, FilterOptionsModel } from '../../core/models/filter-options.model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subject, debounceTime, delay, takeUntil } from 'rxjs';
import * as R from 'ramda';
import { VideoManagerService } from '../../shared/services/video-manager/video-manager.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { StreamComponent } from '../stream/stream.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private _onDestroy$ = new Subject<void>();

  @Input() showFilter: boolean = true;

  initialLoading: boolean = true;
  isScrollFetchLoading: boolean = true;
  isScrolledFetchEnd: boolean = false;

  videoList: VideoModel[] = [];
  filteredVideoList: VideoModel[] = [];
  videoListLoader: any[] = new Array(18);

  filterForm!: UntypedFormGroup;
  categoryOptionsList: FilterOptionsModel[] = FilterCategoryOptions;

  startIndex: number = 0;
  batchSize: number = 16;

  showVideoStream: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private videoManagerService: VideoManagerService,
    private nzModalService: NzModalService,
    private el: ElementRef) {

    this.filterForm = this.fb.group({
			search: [''],
			category: [''],
		});
  }

  get isFilteredVideoListEmpty(): boolean {
    return R.isEmpty(this.filteredVideoList);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMoreData();
      // Subscribe to scroll events
      window.addEventListener('scroll', this.onVideoListScroll.bind(this));

      this.checkFormFilterChanges();
    }, 1000);

  }

  onVideoListScroll(): void {
    const scrollContainer = this.el.nativeElement.querySelector('.section-video-list');
    const scrollPosition = scrollContainer.clientHeight + scrollContainer.scrollTop;
    const pageHeight = scrollContainer.scrollHeight;

    // Check if the user has scrolled to the bottom
    if (scrollPosition >= pageHeight && !this.isScrollFetchLoading && !this.isScrolledFetchEnd) {
      this.loadMoreData();
    }
  }

  loadMoreData(): void {
    this.isScrollFetchLoading = true;
    this.videoManagerService.getVideoDataList(this.startIndex, this.startIndex + this.batchSize)
      .pipe(
        delay(1000),
        takeUntil(this._onDestroy$)
      )
      .subscribe((newVideoDataList) => {
        if (R.isEmpty(newVideoDataList)) {
          this.isScrolledFetchEnd = true;
        } else {
          this.videoList = [...this.filteredVideoList, ...newVideoDataList];
          this.filteredVideoList = [...this.videoList];
          this.startIndex += this.batchSize;
        }

        this.isScrollFetchLoading = false;

        if (this.initialLoading) {
          this.initialLoading = false;
          this.videoListLoader = new Array(6);
        }
      });
  }

  checkFormFilterChanges(): void {
    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this._onDestroy$)
    ).subscribe(formValue => {
      let newFilteredVideoList = [...this.videoList];

      if (!R.isEmpty(formValue.search)) {
        newFilteredVideoList = newFilteredVideoList.filter(video => R.includes(formValue.search.toLowerCase(), video.title.toLowerCase()));
      }

      if (!R.isEmpty(formValue.category) && R.isNotNil(formValue.category)) {
        newFilteredVideoList = newFilteredVideoList.filter(video => video.category.toLowerCase() === formValue.category.toLowerCase());
      }

      this.filteredVideoList = newFilteredVideoList;
    });
  }

  getSelectedVideo(selectedVideo: VideoModel): void {
    if (R.isNotNil(selectedVideo)) {
      this.videoManagerService.setSelectedVideo(selectedVideo);

      this.nzModalService.create({
        nzTitle: selectedVideo.title,
        nzContent: StreamComponent,
        nzFooter: null,
        nzMaskClosable: true,
        nzClosable: true,
        nzCentered: true,
        nzWidth: '1000px',
        nzClassName: 'nz-modal-stream-video',
        // nzBodyStyle: { height: 'calc(90vh)', overflow: 'hidden' },
        // nzMaskStyle: { margin: '0px', padding: '0px', overflow: 'hidden' },
        nzOnCancel: () => this.closeVideoStream()
      });
    }
  }

  closeVideoStream(): void {
    this.videoManagerService.setSelectedVideo(null);
    this.nzModalService.closeAll();
  }

  ngOnDestroy() {
    // Unsubscribe from scroll events
    window.removeEventListener('scroll', this.onVideoListScroll.bind(this));

		this._onDestroy$.next();
		this._onDestroy$.complete();
		this._onDestroy$.unsubscribe();
	}
}
