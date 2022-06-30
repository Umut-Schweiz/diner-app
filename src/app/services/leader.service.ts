import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(id: string):Observable<Leader>{
    return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2750));
  }

  getFeaturedLeader():Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2750));
  }

  getLeaders():Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2750));
  }
}
