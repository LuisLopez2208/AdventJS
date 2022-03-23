function wrapGifts(gifts) {
    return  ["*".repeat(gifts[0].length + 2), ...gifts.map( gift => `*${gift}*`), "*".repeat(gifts[0].length + 2) ]  
  }