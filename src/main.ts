import 'core-js/es6';
import 'core-js/es7/reflect';

// RxJS
import { Observable } from 'rxjs/Rx';

let eventSource = Observable.fromEvent(document.querySelector('.input'), 'keypress');

eventSource
    .map(value => value['key'])
    .subscribe(value => {
        (<HTMLInputElement>document.querySelector('.normal-output')).textContent += value;
    });

eventSource
    .map(value => value['key'])
    .distinctUntilChanged()
    .subscribe(value => {
        (<HTMLInputElement>document.querySelector('.distinct-output')).textContent += value;
    });

eventSource
    .map(value => value['key'])
    .delay(200)
    .subscribe(value => {
        (<HTMLInputElement>document.querySelector('.delay-output')).textContent += value;
    });

eventSource
    .map(value => value['key'])
    .throttleTime(200)
    .subscribe(value => {
        (<HTMLInputElement>document.querySelector('.throttle-output')).textContent += value;
    });

eventSource
    .map(value => value['key'])
    .debounceTime(800)
    .subscribe(value => {
        (<HTMLInputElement>document.querySelector('.debounce-output')).textContent += value;
    });