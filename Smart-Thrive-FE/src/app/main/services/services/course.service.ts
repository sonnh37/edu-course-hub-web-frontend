import { Injectable } from '@angular/core';
import { ConstantsApi } from '../../../shared/constants/constants-api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';
import { BaseResponse, ItemResponse } from '../../../data/model/base-response';
import { PaginatedRequest, PaginatedRequestFillter } from '../../../data/model/paginated-request';
import { PaginatedListResponse } from '../../../data/model/paginated-response';
import { Course } from '../../../data/entities/course';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService extends BaseService<Course> {
  constructor(public _http: HttpClient) {
    super(_http, 'course')
  }

}