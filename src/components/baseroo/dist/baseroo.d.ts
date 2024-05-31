import { BaseError } from 'make-error';
export declare class InvalidDigitError extends BaseError {
    digit: string;
    base: number;
    constructor(digit: string, base: number);
}
export declare class InvalidBaseError extends BaseError {
    ref: string;
    base: number;
    maxBase: number;
    constructor(ref: string, base: number, maxBase: number);
}
export declare const defaultAlphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
export declare function convertBase(value: string, fromBase: number, toBase: number): string;
