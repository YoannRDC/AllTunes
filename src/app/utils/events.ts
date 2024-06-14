import { Log } from "viem"

// Interfaces
export interface ILayoutEventLog {
    linkTitle: string
    blockTitle: string
    title: string
    smartContractAddress: string
    blockHash: string
    transactionHash: string
    blockNumber: string
    publicKeyAddress: string
}

export interface ILayoutEventLogMapping {
    addressAttribute: string
    addressValue: `0x${string}`
}

export interface IhandleEventsResponse {
    eventLog: IEventLog | undefined
    ok: boolean
}

export interface IEventFieldLayout {
    title: string
    value: string | `0x${string}` | null | undefined
    border?: boolean
}

export interface IEventLog {
    blockTitle: string
    blockData: IEventFieldLayout[],
    title: string
    data: IEventFieldLayout[]
}


export const handleEvents = (
    layoutEventLog: ILayoutEventLog,
    eventLogs: Iterable<Log>, 
    mapping: ILayoutEventLogMapping
): IhandleEventsResponse => {
    
    let handleEventsResponse: IhandleEventsResponse = {
        eventLog: undefined,
        ok: false
    }
    
    console.log(`event.ts:handle events`, eventLogs)
    
    for (const log of eventLogs as Iterable<Log>) {
        // @ts-expect-error experimental
        const logArgs: any = log.args
        
        console.log('event.ts:handleEvents mapping', mapping)
        console.log('event.ts:handleEvents logArgs', logArgs)

        if (logArgs[mapping.addressAttribute] === mapping.addressValue) {
            const eventLog: IEventLog  = {
                blockTitle: layoutEventLog.blockTitle,
                blockData: [
                    {
                        title: layoutEventLog.smartContractAddress,
                        value: log.address
                    },
                    {
                        title: layoutEventLog.blockHash,
                        value: log.blockHash
                    },
                    {
                        title: layoutEventLog.transactionHash,
                        value: log.transactionHash
                    },
                    {
                        title: layoutEventLog.blockNumber,
                        value: log.blockNumber?.toString()
                    },
                ],
                title: layoutEventLog.title,
                data: []
            }
            
            handleEventsResponse = {eventLog: eventLog, ok: true}
            return handleEventsResponse
        }
    }
    console.log('handleEvents handleEventsResponse', handleEventsResponse)
    return handleEventsResponse
}