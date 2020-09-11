export * from './add';
export * from './divide';
export * from './multiply';
export * from './subtract';

import { format } from 'date-fns';

export function greet() {
console.log(format(new Date(), "'Today is a' iiii"));
}