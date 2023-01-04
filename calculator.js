export default class Calculator {
  add(num1, num2) {
    if (this.validate(num1) && this.validate(num2)) {
      return num1 + num2;
    } else {
      return undefined;
    }
  }
  subtract(num1, num2) {
    if (this.validate(num1) && this.validate(num2)) {
      return num1 - num2;
    } else {
      return undefined;
    }
  }
  divide(num1, num2) {
    if (num2 === 0) {
      return undefined;
    }
    if (this.validate(num1) && this.validate(num2)) {
      if (this.notFloat(num1 / num2) == false) {
        return Number((num1 / num2).toFixed(2));
      } else {
        return num1 / num2;
      }
    } else {
      return undefined;
    }
  }
  multiply(num1, num2) {
    if (this.validate(num1) && this.validate(num2)) {
      return num1 * num2;
    } else {
      return undefined;
    }
  }
  notFloat(num) {
    return Number.isInteger(num);
  }
  notNegative(num) {
    return !(Math.sign(num) == -1);
  }
  validate(num) {
    return this.notFloat(num) && this.notNegative(num);
  }
}
