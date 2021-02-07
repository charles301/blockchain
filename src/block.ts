interface BlockData {
    index: number
    hash: string
    previousHash: string
    transactions: any[]
    data: string
    key: string
}

interface TransactionData{
    from: string
    to: string
    ammount: number
}


export class Block implements BlockData {
    constructor(
        public index: number = 0,
        public hash: string = "",
        public previousHash: string = "",
        public data: string = "",
        public transactions: TransactionData[] = []
    ){}
    get key(): string {
        return JSON.stringify(this.transactions) + this.index + this. previousHash + this.data
    }

    public addTransaction(transaction: TransactionData): void {
        this.transactions= [...this.transactions, transaction]
        // spread operator so no change to state
    }
}