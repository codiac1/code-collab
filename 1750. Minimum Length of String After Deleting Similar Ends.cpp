class Solution {
public:
    int minimumLength(string s) {
        int n = s.size();
        int i = 0, j = n-1;
        char prev = 'A';

        while(i < j) {
            if(s[i] == s[j]) {
                prev = s[i];
                i += 1;
                j -= 1;
            }
            else if(s[i] == prev) {
                i += 1;
            }
            else if(s[j] == prev) {
                j -= 1;
            }
            else {
                break;
            }
            //cout<<i<<":"<<j<<":prev "<<prev<<endl;
        }
        if((i == j) && (s[i] == prev))
            return 0;
        return (j-i+1);
    }
};
