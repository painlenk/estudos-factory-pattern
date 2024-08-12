import { productController } from "./controllers/productController";
import { transportController, TransportController } from "./controllers/transportController";

function Main() {
//criar o produto, definir qual seria o meio de transport
const product = productController.getProduct()
transportController.setType('ship')
const transport = transportController.getTransport()

//definir meio de transporte


console.log(product, transport)


}

Main()

