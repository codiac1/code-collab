// Leetcode : 543. Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

//Definition for a binary tree node.

class TreeNode {     val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function diameterOfBinaryTree(root: TreeNode | null): number {
    let max_diameter : number = 0;

    function findMaxDiameter(root : TreeNode | null): number{
        if (root == null)
            return 0

        let left_diameter = findMaxDiameter(root.left)
        let right_diameter = findMaxDiameter(root.right)

        let current_diameter = left_diameter + right_diameter

        max_diameter = Math.max(max_diameter, current_diameter)

        return 1 + Math.max(left_diameter, right_diameter)

    }
    if (root == null)
        return 0

    findMaxDiameter(root)

    return max_diameter;
};