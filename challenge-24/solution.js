export default function checkIsSameTree(treeA, treeB) {
	if (treeA === treeB) {
		return true;
	}

	const stack = [{ nodeA: treeA, nodeB: treeB }];

	while (stack.length) {
		const { nodeA, nodeB } = stack.pop();

		if (nodeA.value !== nodeB.value) {
			return false;
		}

		if (nodeA.left && nodeB.left) {
			stack.push({ nodeA: nodeA.left, nodeB: nodeB.left });
		} else if (!nodeA.left && !nodeB.left) {
			// do nothing
		} else {
			return false;
		}

		if (nodeA.right && nodeB.right) {
			stack.push({ nodeA: nodeA.right, nodeB: nodeB.right });
		} else if (!nodeA.right && !nodeB.right) {
			// do nothing
		} else {
			return false;
		}
	}
	return true;
}
