export default function countDecorations(bigTree) {
  const stack = [bigTree];
  let sum = 0;
  while(stack.length > 0) {
    const current = stack.pop();
    sum += current.value;
    if(current.left) {
      stack.push(current.left);
    }
    if(current.right) {
      stack.push(current.right);
    }
  }
  return sum;
}
