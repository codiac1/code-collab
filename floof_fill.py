# Leetcode - 733. Flood Fill

"""
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill

"""

class Solution(object):
    def floodFill(self, image, sr, sc, color):
        """
        :type image: List[List[int]]
        :type sr: int
        :type sc: int
        :type color: int
        :rtype: List[List[int]]
        """

        def inRange(i , j):
            if i < 0 or j < 0 or i >= len(image) or j >= len(image[0]):
                return False
            return True


        def dfs(i , j ):
            if not inRange(i, j):
                return 

            oldcolor = image[i][j]

            image[i][j] = color
            visited.add((i, j))

            for (x, y) in [(0,1) , (1, 0) , (-1,0), (0, -1)]:
                nx = i + x
                ny = j + y

                if not inRange(nx, ny):
                    continue 

                if (nx, ny) in visited:
                    continue

                if image[nx][ny] != oldcolor:
                    continue

                dfs(nx , ny) 

        visited = set()
        dfs(sr , sc )
        return image
        