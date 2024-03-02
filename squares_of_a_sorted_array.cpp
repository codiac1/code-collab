class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
    /*
        Trivial approach is simple where we square the numbers and then sort it
        resulting in O(nlogn) tc.

        But if you look closely then you can gurantee that squares of positive sorted
        number will always be sorted.
        and for negative numbers it will be sorted in reverse.

        so now we just have two list one negative numbers squared which is in descending
        order and other positive number squared in ascending.

        now simply merge two sorted array.(Hint: Merge Sort Concept but applied 1 time) 
    */
        vector<int> res(nums.size());
        vector<int> negative,positive;
        for(auto num : nums) {
            if(num < 0)
                negative.push_back(num*num);
            else
                positive.push_back(num*num);
        }
        int m = negative.size();
        int n = positive.size();

        int i = m - 1;
        int j = 0;
        int k = 0;

        while((i >= 0) && (j < n)) {
            if(negative[i] < positive[j]) {
                res[k] = negative[i];
                i -= 1;
                k += 1;
            }
            else {
                res[k] = positive[j];
                j += 1;
                k += 1;
            }
        }
        while(i >= 0) {
            res[k] = negative[i];
            k += 1;
            i -= 1;
        }

        while(j < n) {
            res[k] = positive[j];
            k += 1;
            j += 1;
        }
        return res;
    }
};
