
const printPrice = price => {
  let strResult = '';
  let titik = 0;

  while (price > 9) {
    if (titik == 3) {
      titik = 0;
      strResult = '.' + strResult;
    }

    strResult = (price % 10) + strResult;
    price = parseInt(price / 10);
    titik += 1;
  }

  if (titik == 3) {
    strResult = '.' + strResult;
  }

  let koma = price % 1;

  strResult = 'Rp ' + (price - koma) + strResult;

  return strResult;
};
export {printPrice};
