import { TransportRepository } from "./transportRepository"

class AirPlaneTransportRepository extends TransportRepository {
    
    constructor(){
        super({name: 'air plane', coverageDelivery: 9000, package: "box", price: 1500})
    }
    
}

const airPlaneTransportRepository = new AirPlaneTransportRepository()

export {airPlaneTransportRepository, AirPlaneTransportRepository }