import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MachineResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    return [
      { type: 'exampleType1', subtype: 'exampleSubtype1' },
      { type: 'exampleType2', subtype: 'exampleSubtype2' },
    
    ];
  }
}