function adjustToUTC8(date) {
   const offset = 8 * 60 * 60 * 1000; // +8 hours in milliseconds
   return new Date(date.getTime() + offset);
}

module.exports = adjustToUTC8;
