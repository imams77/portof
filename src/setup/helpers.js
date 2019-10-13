const  generateRandomString = (length) => {
    let randomString = ''
    let randomAscii
    let low = 65
    let high = 90
    for (let i = 0; i < length; i++) {
      randomAscii = Math.floor((Math.random() * (high - low)) + low)
      randomString += String.fromCharCode(randomAscii)
    }
    return randomString
  }
const generateRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
const generateRandomDate = (dateStart, dateEnd) => {
  return new Date(dateStart.getTime() + Math.random() * (dateEnd.getTime() - dateStart.getTime()));
}

export {
  generateRandomString,
  generateRandomDate,
  generateRandomInt
}