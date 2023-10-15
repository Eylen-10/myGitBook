# 二叉树（Binary Tree）
## 前、中、后序遍历

`````javascript
var traverse = function(root){
  if(!root) return root;
  
  // 前序位置
  traverse(root.left);
  // 中序位置
  traverse(root.right);
  // 后序位置
}
`````

- 前序遍历：在刚进入节点的时候执行，只能获取到父节点的信息。
- 中序遍历：常用于二叉搜索树（BST），BST的中序遍历相当于遍历有序数组
- 后序遍历：在即将离开节点的时候执行，此时可以获取子树的信息（如左右子树的深度等等）。

## 层序遍历

``````javascript
var levelTraverse = function(root){
	if(!root) return;
	const q = [];
	q.push(root);
	
	while(q.length){
		let curLevelLen = q.length;
		for(let i = 0; i < curLevelLen; i++){
			let tem = q.shift();
			if(tem.left) q.push(tem.left);
			if(tem.right) q.push(tem.right);
		}
	}
}
``````

## LeetCode 236. [二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

``````javascript
 var lowestCommonAncestor = function(root, p, q) {
    if(!root || root.val == p || root.val == q) return root;
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    if(left && right) return root;
    return left ? left : right;
};
``````

## LeetCode 124.[ 二叉树中的最大路径和](https://leetcode.cn/problems/binary-tree-maximum-path-sum/)

``````javascript
var maxPathSum = function(root) {
  let max = -Infinity;
  function traverse(node) {
      if (!node) return 0; // 节点不存在则返回
      let l = Math.max(0,traverse(node.left))
      let r = Math.max(0,traverse(node.right))
      max = Math.max(max, (l+r+node.val)) // 更新最优路径和
      return Math.max(l,r)+node.val;
  }


  traverse(root); // 从根节点开始遍历
  return  max;
};
``````

## LeetCode 968. [监控二叉树](https://leetcode.cn/problems/binary-tree-cameras/)

``````javascript
var minCameraCover = function(root) {
  let camera = 0;
  function traverse(node) {
      if (!node) return 2; // 节点不存在则返回
      let l = traverse(node.left);
      let r = traverse(node.right);
      if(l == 0 || r == 0){
        node.val = 1;
        camera ++;
      }else if(l==1 || r ==1){
        node.val = 2
      }
      return node.val;
  }


  traverse(root); // 从根节点开始遍历
  if(root.val == 0){
    root.val = 1;
    camera++;
  }
  return  camera;
};
``````

