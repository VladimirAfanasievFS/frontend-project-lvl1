
const generateRandomNumber = (min = 0, max = 10) => {
  const generationResult = Math.floor(Math.random() * (max - min + 1)) + min;
  return generationResult;
};

export default generateRandomNumber;
