export const loadImages = () => {
  let imgArr = [];
  for (var i = 0; i < 26; i++) {
    const imageNames = `${i}.png`;
    let imgSrc = `../img/avatars/` + `${imageNames}`;
    imgArr.push(imgSrc);
  }
  return imgArr[Math.floor(Math.random() * imgArr.length)];
};
