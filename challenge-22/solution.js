export default function countDecorations(bigTree) {
  const stack = [bigTree];
  let sum = 0;
  while(stack.length > 0) {
    const { value, left, right } = stack.pop();
    sum += value;
    if(left) {
      stack.push(left);
    }
    if(right) {
      stack.push(right);
    }
  }
  return sum;
}
