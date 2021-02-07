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

interface BlockChainData {
    blocks: BlockData[]
    genesisBlock: BlockData
    addBlock(block: BlockData): void
//    getNextBlock(transactions: TransactionData[]): BlockData
    generateHash(block: BlockData): string
}

export default class Blockchain implements BlockChainData {
    public blocks: BlockData[]
    public genesisBlock: BlockData
    
    constructor(genesisBlock: BlockData) {
        this.blocks = []
        this.addBlock(genesisBlock)
    }

    public addBlock(block: BlockData): void {
        // if genesis block exists 
        if (this.blocks.length === 0){
            block.previousHash = "0000000000"
            block.hash = this.generateHash(block)
        }
        this.blocks = [...this.blocks, block]
    }

    public generateHash( block: BlockData){
        return ''
    }
}