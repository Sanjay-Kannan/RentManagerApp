import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  readonly propertyApiUrl = "http://localhost:5104/api";

  constructor(private http:HttpClient) { }


  //Property:

  getPropertyList():Observable<any[]> {
    return this.http.get<any>(this.propertyApiUrl + '/Properties');
  }

  addProperty(data:any) {
    return this.http.post(this.propertyApiUrl + '/Properties', data);
  }

  updateProperty(id:number|string, data:any) {
    return this.http.put(this.propertyApiUrl + `/Properties/${id}`, data);
  }

  deleteProperty(id:number|string, ) {
      return this.http.delete(this.propertyApiUrl + `/Properties/${id}`);
    }


    //Tenants:

    getTenantList():Observable<any[]> {
      return this.http.get<any>(this.propertyApiUrl + '/Tenants');
    }
  
    addTenant(data:any) {
      return this.http.post(this.propertyApiUrl + '/Tenants', data);
    }
  
    updateTenant(id:number|string, data:any) {
      return this.http.put(this.propertyApiUrl + `/Tenants/${id}`, data);
    }
  
    deleteTenant(id:number|string, ) {
        return this.http.delete(this.propertyApiUrl + `/Tenants/${id}`);
      }

    // Rooms:

    getRoomList():Observable<any[]> {
      return this.http.get<any>(this.propertyApiUrl + '/Rooms');
    }
  
    addRoom(data:any) {
      return this.http.post(this.propertyApiUrl + '/Rooms', data);
    }
  
    updateRoom(id:number|string, data:any) {
      return this.http.put(this.propertyApiUrl + `/Rooms/${id}`, data);
    }
  
    deleteRoom(id:number|string, ) {
        return this.http.delete(this.propertyApiUrl + `/Rooms/${id}`);
      }

    //Rent:

    getRentList():Observable<any[]> {
      return this.http.get<any>(this.propertyApiUrl + '/Rents');
    }
  
    addRent(data:any) {
      return this.http.post(this.propertyApiUrl + '/Rents', data);
    }
  
    updateRent(id:number|string, data:any) {
      return this.http.put(this.propertyApiUrl + `/Rents/${id}`, data);
    }
  
    deleteRent(id:number|string, ) {
        return this.http.delete(this.propertyApiUrl + `/Rents/${id}`);
      }
}
