import { FormControl } from '@angular/forms';

export function noWhiteSpace(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const spaceRegex = /^[a-zA-Z0-9]*$/;
    const noWhiteSpaceValue = spaceRegex.test(control.value);
    return isWhitespace || !noWhiteSpaceValue ? { whitespace: true } : null;
}
