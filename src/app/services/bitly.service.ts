import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  private apiKey = 'a9678634bc6aabb535ecb15af1913a408002ec62';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  shortenUrl(longUrl: string): Observable<any> {
    // const body = JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
    const body = { "long_url": longUrl, "domain": "bit.ly", "group_guid": "Ba1bc23dE4F"  };
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    return this.http.post(`${this.apiUrl}shorten`, body, { headers });
  }
}
