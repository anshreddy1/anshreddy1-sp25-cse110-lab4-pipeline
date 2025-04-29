/**
 * Adds two numbers if the `add` flag is true.
 *
 * @param {number}  num1  First number.
 * @param {number}  num2  Second number.
 * @param {boolean} add   Whether to perform the addition.
 * @returns {number|boolean} Sum of the numbers when `add` is true and both
 *          operands are numeric; otherwise `false`.
 */
function sumValues(num1, num2, add) {
    if (!add) return false; // add flag is false → spec says return false
  
    // Guard against non-numeric inputs
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return false;
    }
  
    return num1 + num2;
  }
  
  /**
   * Applies a percentage discount to each price in an array.
   *
   * @param {number[]} prices   Array of original prices.
   * @param {number}   discount Decimal between 0 and 1 (e.g. 0.2 for 20% off).
   * @returns {number[]|boolean} Array of discounted prices rounded to two decimals,
   *          or `false` if inputs are invalid or the array is empty.
   */
  function discountPrices(prices, discount) {
    // Validate inputs
    if (!Array.isArray(prices) || typeof discount !== 'number') return false;
    if (prices.length === 0) return false;
    if (discount < 0 || discount > 1) return false;
  
    const discounted = [];
  
    for (let i = 0; i < prices.length; i++) {
      const price = prices[i];
  
      // Skip non-numeric entries; if any are non-number, treat whole input as invalid
      if (typeof price !== 'number') return false;
  
      const newPrice = Math.round(price * (1 - discount) * 100) / 100;
      discounted.push(newPrice);
    }
  
    return discounted;
  }
  
  module.exports = { sumValues, discountPrices };
  