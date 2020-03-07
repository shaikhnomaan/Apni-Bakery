import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitude : string ;
  longitude : string ;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http:HttpClient) { }

  getLocation(){
    return this.http.get<Location>
    ('http://www.apilayer.net/api/validate?access_key=9973d46cb7c0b15a0566c426de1cf1da&vat_number=LU26375245&format=1')
  }
  
}
// http://api.ipapi.com/api/check?access_key=''