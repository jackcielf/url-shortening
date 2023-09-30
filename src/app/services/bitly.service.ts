import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  private apiKey = 'a9678634bc6aabb535ecb15af1913a408002ec62';
  private apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) {}

  shortenLink(longUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    });

    const body = { long_url: longUrl };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
