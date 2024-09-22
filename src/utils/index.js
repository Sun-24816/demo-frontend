export function handleNum(price) {
  return price >= 10000 ? price / 10000 + "万" : price;
}
