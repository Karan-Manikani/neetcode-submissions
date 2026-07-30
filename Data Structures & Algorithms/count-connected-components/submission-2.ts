class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adjList = this.generateAdjacencyList(n, edges);
        const visited = new Set<number>();
        let connectedComps = 0;
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                connectedComps++;
                this.DFS(i, visited, adjList);
            }
        }

        return connectedComps
    }

    generateAdjacencyList(n: number, edges: number[][]): Map<number, number[]> {
        const adjList = new Map<number, number[]>();
        for (let i = 0; i < n; i++) {
            adjList.set(i, []);
        }
        for (const [u, v] of edges) {
            adjList.get(u)!.push(v);
            adjList.get(v)!.push(u);
        }

        return adjList
    }

    DFS(node: number, visited: Set<number>, adjList: Map<number, number[]>): void {
        if (visited.has(node)) return;
        visited.add(node);
        for (const neighbor of adjList.get(node)!) {
            this.DFS(neighbor, visited, adjList);
        }
    }
}

// 0 => [1]
// 1 => [0, 2]
// 2 => [1]
// 3 => [4]
// 4 => [3]

// stack: []