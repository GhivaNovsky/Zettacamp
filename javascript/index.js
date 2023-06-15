const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Mengurutkan array secara ascending
  const sortedArray = input.sort((a, b) => a - b);

  // Mencari median
  const middleIndex = Math.floor(sortedArray.length / 2);
  if (sortedArray.length % 2 === 0) {
    // Jika panjang array genap, ambil rata-rata dari dua nilai tengah
    return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  } else {
    // Jika panjang array ganjil, ambil nilai tengah
    return sortedArray[middleIndex];
  }
}

console.log(result(input));