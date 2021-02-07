interface TransactionData{
    from: string
    to: string
    ammount: number
}

export default class transaction implements TransactionData{
    constructor(
        public from: string,
        public to: string,
        public ammount: number
    ){}
}