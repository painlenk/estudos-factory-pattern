export interface ITransport {
    name: 'ship' | 'air plane',
    price: number,
    package: 'container' | 'box',
    coverageDelivery: number,
}