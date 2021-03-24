import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WizardModel } from '../models/wizard';
import { api } from '../const/api';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  constructor(private http: HttpClient) { }

  getCharacters(magicHouse: string): Observable<any> {
    return this.http.get(`${api}/house/${magicHouse}`).pipe(
      map( (resp: WizardModel[]) => {
        let list: WizardModel[] = [];
        resp.map( (obj: WizardModel) => {
          const  wizard = new WizardModel(obj);
          list = [...list, wizard];
        });
        return list;
      })
    );
  }

  getProfesors(): Observable<any> {
    return this.http.get(`${api}/staff`).pipe(
      map( (resp: WizardModel[]) => {
        let list: WizardModel[] = [];
        resp.map( (obj: WizardModel) => {
          const  wizard = new WizardModel(obj);
          list = [...list, wizard];
        });
        return list;
      })
    );
  }

  getStudents(): Observable<any> {
    return this.http.get(`${api}/students`).pipe(
      map( (resp: WizardModel[]) => {
        let list: WizardModel[] = [];
        resp.map( (obj: WizardModel) => {
          const  wizard = new WizardModel(obj);
          list = [...list, wizard];
        });
        return list;
      })
    );
  }

  saveStorage(student: WizardModel): void {
    if (!localStorage.getItem('listStudens')) {
      localStorage.setItem('listStudens', JSON.stringify([student]));
    } else {
      const refList: WizardModel[] =  JSON.parse(localStorage.getItem('listStudens'));
      localStorage.removeItem('listStudens');
      localStorage.setItem('listStudens', JSON.stringify([student, ...refList]));
    }
  }

  getStorage(): WizardModel[] {
    return localStorage.getItem('listStudens') ? JSON.parse(localStorage.getItem('listStudens')) : [];
  }

}
