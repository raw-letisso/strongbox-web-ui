import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
// import {plainToClass} from 'class-transformer';

@Injectable({
    providedIn: 'root'
})
export class DashboardMetricsService {
    constructor(private http: HttpClient) {
    }

    getCpuUsage(): Observable<any> {
        return this.http.get(`/api/monitoring/metrics/process.cpu.usage`);
    }

    getJvmUsedMemory(): Observable<any> {
        return this.http.get(`/api/monitoring/metrics/jvm.memory.used`);
    }

    getJvmMaxMemory(): Observable<any> {
        return this.http.get(`/api/monitoring/metrics/jvm.memory.max`);
    }

    getJvmLiveThreads(): Observable<any> {
        return this.http.get(`/api/monitoring/metrics/jvm.threads.live`);
    }
}
