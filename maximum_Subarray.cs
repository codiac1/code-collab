/*
Leetcode : 53. Maximum Subarray

Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Example :

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

// Kadane's Algorithm Solution

public class Solution {
    public int MaxSubArray(int[] nums) {
        int ans = nums[0];
        int currentSum = 0 ;

        foreach(int element in nums){
            currentSum += element;
            if (currentSum > ans){
                ans = currentSum;
            }
            if (currentSum < 0 ){
                currentSum = 0 ;
            }
        }
        return ans;
    }
}