import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  task = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  updateData(newData: any): void {
    this.task.next(newData);

  }
}
