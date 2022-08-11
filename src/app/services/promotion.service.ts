import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private http:HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions():Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions.json')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return  this.http.get<Promotion>(`${baseURL}promotion/${id}.json`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion():Observable<Promotion>{
    return this.http.get<Promotion[]>(baseURL + 'promotions.json?featured=true')
      .pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
