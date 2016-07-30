
module.exports = {

  /**
   * Math.round with 'precision' parameter
   *
   * @param {number} number
   * @param {number} precision
   *
   * @return {number}
   */
  round: function(number, precision) {

    const multiplier = !!precision ? Math.pow(10, precision) : 1;

    return Math.round(number * multiplier) / multiplier;
  },

  /**
   * Math.ceil with 'precision' parameter
   *
   * @param {number} number
   * @param {number} precision
   *
   * @return {number}
   */
  ceil: function(number, precision) {

    const multiplier = !!precision ? Math.pow(10, precision) : 1;

    return Math.ceil(number * multiplier) / multiplier;
  },

  /**
   * Math.floor with 'precision' parameter
   *
   * @param {number} number
   * @param {number} precision
   *
   * @return {number}
   */
  floor: function(number, precision) {

    const multiplier = !!precision ? Math.pow(10, precision) : 1;

    return Math.floor(number * multiplier) / multiplier;
  }

};
