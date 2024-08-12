import { ITransport } from "../interfaces/transportRepository/transport";

abstract class TransportRepository {

    constructor(private readonly transport: ITransport ) {}

    public getTransport() {
        return this.transport
    }
}

export {TransportRepository}