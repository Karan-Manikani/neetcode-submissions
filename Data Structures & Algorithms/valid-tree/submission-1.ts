class Solution {
    private adjList = new Map<number, number[]>();
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        this.buildAdjacencyList(edges, n);
        const visited = new Set<number>();
        if (this.hasCycle(0, -1, visited)) return false;

        return visited.size === n;
    }

    buildAdjacencyList(edges: number[][], nodes: number): void {
        for (let i = 0; i < nodes; i++) {
            this.adjList.set(i, []);
        }
        for (const [u, v] of edges) {
            this.adjList.get(u)!.push(v);
            this.adjList.get(v)!.push(u);
        }
    }

    hasCycle(node: number, prev: number, visited: Set<number>): boolean {
        const stack: [number, number][] = [[node, prev]];
        visited.add(node);
        while (stack.length > 0) {
            const [currentNode, prevNode] = stack.pop()!;
            for (const neighbor of this.adjList.get(currentNode)!) {
                if (neighbor !== prevNode) {
                    if (visited.has(neighbor)) return true;
                    visited.add(neighbor);
                    stack.push([neighbor, currentNode]);
                }
            }
        }
        
        return false;
    }
}
