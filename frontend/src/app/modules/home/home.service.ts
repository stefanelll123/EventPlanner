import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/shared/http.service';

@Injectable({
    providedIn: 'root',
})
export class HomeService {

    constructor(private http: HttpService) {}
}
