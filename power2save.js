/** Class Power2Save */
export default class Power2Save {
  /**
   * Internal array to store the power of 2 data
   * @private
   */
  power2Data = []

  /**
   * Constructor for the Power2Save class
   *
   * @param {Array} data The data to initialize the class with. The persisted data will be chosen from this array.
   */
  constructor(data) {
    this.power2Data = []
    let index = 1
    for (let i = 0; i < data.length; i++) {
      this.power2Data[index] = data[i]
      index *= 2
    }
  }

  /**
   * Get the items in power2data that match the provided value, which is a sum of powers of 2.
   *
   * @param {number} val The value to get the items from
   * @returns {Array} The items that match the value
   */
  getItems(val) {
    const maxValue = Math.pow(2, this.power2Data.filter((n) => n).length)
    const items = []

    for (let i = maxValue; i >= 1; i *= 0.5) {
      if ((val & i) === i && this.power2Data[i]) {
        items.push(this.power2Data[i])
      }
    }
    return items.reverse()
  }

  /**
   * Get the sum of powers of 2 that represents the items.
   * This is the data to be persisted.
   *
   * @param {number} val The value to get the items from
   * @returns {Array} The items that match the value
   */
  getValue(items) {
    let val = 0
    const cache = []
    items.forEach((item) => {
      if (this.power2Data.indexOf(item) > -1 && cache.indexOf(item) === -1) {
        cache.push(item)
        val += this.power2Data.indexOf(item)
      }
    })
    return val
  }
}
