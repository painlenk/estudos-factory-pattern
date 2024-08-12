import { airPlaneTransportRepository, AirPlaneTransportRepository } from "../repository/airPlaneTransportRepository";
import { shipTransportRepository, ShipTransportRepository } from "../repository/shipTransportRepository";

class TransportController {
    private type = ''

    constructor(private readonly ship: ShipTransportRepository, private readonly airplane: AirPlaneTransportRepository) {}

    public getTransport() {
        if(!this.type) {
            throw new Error('type is null')
        }

        if(this.type == 'ship') {
            return this.ship.getTransport()
        }

        return this.airplane.getTransport()
    }

    public setType(type: string) {
        this.type = type
    }
}

const transportController = new TransportController(shipTransportRepository, airPlaneTransportRepository)
export {transportController, TransportController}

