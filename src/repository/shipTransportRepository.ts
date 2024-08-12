import { TransportRepository } from "./transportRepository"

class ShipTransportRepository extends TransportRepository {
     constructor() {
        super({name: "ship", package: "container", coverageDelivery: 10000, price: 2000})
     }
}

const shipTransportRepository = new ShipTransportRepository()

export {shipTransportRepository, ShipTransportRepository }