import { FormControl } from '@angular/forms';

export function noWhiteSpace(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const spaceRegex = /[\S\s]{6,}/;
    // tslint:disable-next-line:no-shadowed-variable
    const noWhiteSpace = spaceRegex.test(control.value);
    return isWhitespace || noWhiteSpace ? { whitespace: true } : null;
}
