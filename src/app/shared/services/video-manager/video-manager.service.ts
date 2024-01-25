import { Injectable } from '@angular/core';
import { VideoModel, VideoSampleList } from '../../../core/models/video.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseService } from '../base.service';
import { HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoManagerService extends BaseService {

  private _videoDataList: VideoModel[] = VideoSampleList; // Your data array
  private _selectedVideoData: BehaviorSubject<VideoModel | null> = new BehaviorSubject<VideoModel | null>(null);

  selectedVideo$: Observable<VideoModel | null> = this._selectedVideoData.asObservable();

  getVideoDataList(startIndex: number, endIndex: number): Observable<VideoModel[]> {
    // Simulate fetching data from an API
    const newVideoDataList = this._videoDataList.slice(startIndex, endIndex);
    return of(newVideoDataList);
  }

  setSelectedVideo(video: VideoModel | null): void {
    this._selectedVideoData.next(video);
  }

  uploadNewVideo(formData: any): Observable<HttpEvent<any>> {
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts/', formData);
  }
}
