/**
 * Created by coughlat on 25-Apr-17.
 */
export interface IInventory{
    id: number
    name: string
    date: Date
    time: string
    price: number
    imageUrl: string
    location?: {
        address: string
        city: string
        country: string
    },
    onlineUrl?: string,
    contracts: IContract[]
}

export interface IContract{
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string[]
}