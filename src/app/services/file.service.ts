import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    return this.http.post('https://api.cloudinary.com/v1_1/dzwmizw5e/image/upload', formData).pipe(
      map((obj: any) => {
        return obj.secure_url;
      })
    );
  }

}
