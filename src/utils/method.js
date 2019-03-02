const method = {
  checkPrice: (vote) => {
    if(vote > 0 && vote <= 3){
      return 3500;
    } else if (vote > 3 && vote <= 6) {
      return 8250;
    } else if (vote > 6 && vote <= 8) {
      return 16350;
    } else {
      return 21250;
    }
  }
}

export default method;