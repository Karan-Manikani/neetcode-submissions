class MedianFinder {
    private smallHeap: any;
    private largeHeap: any;
    constructor() {
        this.smallHeap = new PriorityQueue((a, b) => b - a); // Max heap
        this.largeHeap = new PriorityQueue((a, b) => a - b); // Min heap
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.smallHeap.enqueue(num);
        const isSmallHeapTooLarge = this.smallHeap.size() - this.largeHeap.size() > 1;
        if (isSmallHeapTooLarge) {
            const largestVal = this.smallHeap.dequeue();
            this.largeHeap.enqueue(largestVal);
        }
        const hasImproperNumberPlacement = this.smallHeap.size() !== 0 && this.largeHeap.size() !== 0 
            && this.smallHeap.front() > this.largeHeap.front()
        if (hasImproperNumberPlacement) {
            const smallerVal = this.largeHeap.dequeue();
            const largerVal = this.smallHeap.dequeue();
            this.smallHeap.enqueue(smallerVal);
            this.largeHeap.enqueue(largerVal);
        }

    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.largeHeap.size() > this.smallHeap.size()) return this.largeHeap.front();
        else if (this.largeHeap.size() < this.smallHeap.size()) return this.smallHeap.front();
        else return (this.largeHeap.front() + this.smallHeap.front()) / 2
    }
}
