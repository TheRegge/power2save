export default class Power2Save {
  power2Data: unknown[];
  constructor(data: unknown[]) {
    this.power2Data = [];
    let index = 1;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      this.power2Data[index] = data[i];
      index *= 2;
    }
  }

  getItems(val: number): unknown[] {
    const maxValue = Math.pow(2, this.power2Data.filter((n) => n).length);
    const items = [];

    for (let i = maxValue; i >= 1; i *= 0.5) {
      // tslint:disable-next-line: no-bitwise
      if ((val & i) === i && this.power2Data[i]) {
        items.push(this.power2Data[i]);
      }
    }
    return items.reverse();
  }

  getValue(items: unknown[]): number {
    let val = 0;
    const cache: unknown[] = [];
    items.forEach((item) => {
      if (this.power2Data.indexOf(item) > -1 && cache.indexOf(item) === -1) {
        val += this.power2Data.indexOf(item);
        cache.push(item);
      }
    });
    return val;
  }
}
