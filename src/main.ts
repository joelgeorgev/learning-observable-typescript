import 'core-js/es6';
import 'core-js/es7/reflect';

// RxJS
import { Observable } from 'rxjs/Rx';

var debounceEventSource = Observable.fromEvent(document.querySelector('.debounce-input'), 'keypress');
debounceEventSource
    .distinctUntilChanged()
    .debounceTime(800)
    .subscribe(() => {
        (<HTMLInputElement>document.querySelector('.debounce-output')).textContent = (<HTMLInputElement>document.querySelector('.debounce-input')).value;
    });