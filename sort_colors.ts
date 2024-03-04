/*

Leetcode : 75 | Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

*/

/*
 Do not return anything, modify nums in-place instead.
*/

function sortColors(nums: number[]): void {
    let low : number = 0 ;
    let mid : number = 0 ;
    let high : number  = nums.length -1;

    while(mid <= high){
        // in the mid position we want to have 1 so if 0 is there swap that to low
        if (nums[mid] === 0){
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }
        // nothing to do if 1 is already there just move forward
        else if (nums[mid] === 1){
            mid++;
        }
        // if there is a two swap it with the high positoin where 2 supposed to be 
        else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};