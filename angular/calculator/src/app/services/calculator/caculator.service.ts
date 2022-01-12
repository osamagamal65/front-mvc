import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  /**
  * adds a + b;
  * @param a the first number of the equation
  * @param b the second number of the equation
  * @returns the result of the equation
  */
  public addition(a: number, b: number): number {
    return a + b;
  }

  /**
   * subtracts b from a
   * @param a the first number of the equation
   * @param b the second number of the equation
   * @returns the result of the equation
   */
  public subtraction(a: number, b: number): number {
    return a - b;
  }

  /**
    * divides b on a
    * @param a the first number of the equation
    * @param b the second number of the equation
    * @returns the result of the equation
    */
  public division(a: number, b: number): number {
    return a / b;
  }
  /**
     * multiplies a by b
     * @param a the first number of the equation
     * @param b the second number of the equation
     * @returns the result of the equation
     */
  public multiplication(a: number, b: number): number {
    return a * b;
  }



}
