import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    protected apiUrl: string = 'sampleApi';

    constructor(protected http: HttpClient) {}
}
