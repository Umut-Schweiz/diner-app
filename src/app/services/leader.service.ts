import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(
    private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
    ) { }

  getLeader(id: string):Observable<Leader>{
    return this.http.get<Leader>(`${baseURL}leaders/${id}.json`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader():Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders.json?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeaders():Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders.json')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
