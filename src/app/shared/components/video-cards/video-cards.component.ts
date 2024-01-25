import { Component, Input, OnInit } from '@angular/core';
import { VideoModel } from '../../../core/models/video.model';
import { FilterCategoryOptions } from '../../../core/models/filter-options.model';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrl: './video-cards.component.scss'
})
export class VideoCardsComponent implements OnInit {

  isHoverable: boolean = true;

  @Input() videoDetails!: VideoModel;
  @Input() isLoading: boolean = false;

  get categoryColorTag(): string {
    const category = FilterCategoryOptions.find(option => option.value === this.videoDetails.category);
    return category ? category.color : ''; 
  }

  ngOnInit(): void {
    
  }
}
