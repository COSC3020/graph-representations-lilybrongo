# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

There are two loops within this implementation. The outer loop iterates over the rows of the matrix, and the inner loop handles the columns in the matrix. Both loops will have the same run time and that would be $V$, V is the vertices within this problem. But since both loops have the same runtime, it would be $V * V$. This would give us a final runtime of $V^2$ so the runtime complexity would be $\Theta(V^2)$. The algorithm I believe only depends on the number of vertices. This is because it iterates over all the vertices twice in order to see if they share an edge. 

Referenced class slides and videos, communicated with students daniel collins and will greiner, also referenced geeks for geeks: https://www.geeksforgeeks.org/adjacency-matrix/

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
