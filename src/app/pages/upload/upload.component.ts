import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FilterCategoryOptions, FilterOptionsModel } from '../../core/models/filter-options.model';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Observable, Observer } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { isEmpty, isNil } from 'ramda';
import { VideoManagerService } from '../../shared/services/video-manager/video-manager.service';
import { NzResultModule } from 'ng-zorro-antd/result';
import { RouterModule } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzFormModule,
    NzCardModule,
    NzButtonModule,
    NzUploadModule,
    NzIconModule,
    NzMessageModule,
    NzResultModule,
    NzProgressModule 
  ]
})
export class UploadComponent {

  videoUploadForm!: UntypedFormGroup;
  categoryOptionsList: FilterOptionsModel[] = FilterCategoryOptions;
  allowedFileType: string = 'video/mp4,video/avi,video/mov,video/quicktime';
  // fileSizeLimit: number = 100000;
  fileSizeLimit: number = 25;

  isUploadingForm: boolean = false;
  isUploadingFormSuccess: boolean = false;
  videoUploadPercentage: number = 0;
  intervalPercentProgressId: any;

  constructor(
    private fb: FormBuilder, 
    private nzMessage: NzMessageService,
    private videoManagerService: VideoManagerService) {

    this.videoUploadForm = this.fb.group({
			title: ['', Validators.required, [this.videoTitleAsyncValidator]],
			category: [null, Validators.required],
      description: ['', Validators.required],
      videoFile: ['', Validators.required]
		});
  }

  get videoUploadFormTileValue(): string {
    return this.videoUploadForm.controls['title'].value; 
  }

  get videoFileFormControl(): AbstractControl {
    return this.videoUploadForm.controls['videoFile'];
  }

  get videoCategoryFormControl(): AbstractControl {
    return this.videoUploadForm.controls['category'];
  }

  videoTitleAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value.toLowerCase() === ('Test').toLowerCase()) {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  onSelectBlur() {
    const control = this.videoCategoryFormControl;
    control.markAsTouched();
    if (control.dirty || control.touched && control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity();
    }
  }

  handleUploadChange({ file }: any): void {
    const status = file.status;

    switch (status) {
      case 'done':
        if (!isNil(file.uid) && !isEmpty(file.uid)) {
          this.videoFileFormControl.setValue(file.uid);
        }
        setTimeout(() => {
          this.nzMessage.success(`${file.name} file prepared successfully.`);
        }, 1000);
        break;
      case 'error':
        setTimeout(() => {
          this.nzMessage.error(`${file.name} file upload failed.`);
        }, 1000);
        break;
      case 'removed':
        this.nzMessage.error(`${file.name} was removed`);
        this.videoFileFormControl.setValue('');
        break;
    
      default:
        break;
    }
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    // Implement your custom validation logic here

    if (!this.isFileTypeValid(file)) {
      this.nzMessage.error('File type invalid: Only MP4, AVI, and MOV are allowed');
      return false; 
    }

    if (!this.isFileSizeValid(file)) {
      this.nzMessage.error(`File size exceeds the limit`);
      return false;
    }

    // If validation passes, return true to allow the file upload
    return true;
  }

  isFileTypeValid(file: NzUploadFile): boolean {
    const allowedFileTypes = ['video/mp4', 'video/avi', 'video/mov', 'video/quicktime'];
    if (isNil(file.type)) {
      return false;
    }

    return allowedFileTypes.includes(file.type);
  }

  isFileSizeValid(file: NzUploadFile): boolean {
    if (isNil(file.size)) {
      return false;
    }

    return file.size <=  this.fileSizeLimit * 1024 * 1024;
  }

  submitForm(): void {
    this.isUploadingForm = true;
    this.videoManagerService.uploadNewVideo(this.videoUploadForm.value).subscribe({
      next: (_res: any) => { 
        console.log('SUCCESS');
      },
      error: (_err: Error) => { 
        console.log('ERROR');
        clearInterval(this.intervalPercentProgressId);
        this.isUploadingFormSuccess = true;
      },  
      complete: () => {
        console.log('COMPLETED');
        
        this.intervalPercentProgressId = setInterval(() => {
          if (this.videoUploadPercentage < 100) {
            this.videoUploadPercentage += 20;
          } else {
            // If progress reaches 100%, stop the interval (optional)
            clearInterval(this.intervalPercentProgressId);
            this.isUploadingFormSuccess = true;
          }
        }, 1000);
      }
    });
  }


}
