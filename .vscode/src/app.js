const express = require("express");
import ProductManager from "./productManager";
const app = express ();

const product = async () => {
    let productManager = new ProductManager();
    productManager.fileCreator();
    productManager.addProduct("Telefono", "Iphone XS", 560, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128967910", 10);
    productManager.addProduct("Telefono", "Iphone XS Max", 700, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128967910", 12);
    productManager.addProduct("Telefono", "Iphone 11", 780, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-unselect-gallery-4-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662128967910", 23);
    productManager.addProduct("Telefono", "Iphone 12", 820, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1662129048005", 10);
    productManager.addProduct("Telefono", "Iphone SE", 699, "https://www.apple.com/v/iphone-se/j/images/overview/chip/apps_static__c72hp2z1lo66_large.jpg", 23);
    productManager.addProduct("Telefono", "Iphone 13", 980, "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1654893619853", 10);
    productManager.addProduct("Telefono", "Iphone 14", 1100, "https://www.apple.com/v/iphone-14/c/images/overview/design/gallery_xdr_blue__e1dgjo6d86eu_large.jpg", 23);
    productManager.addProduct("Telefono", "Iphone 14 Pro", 1670, "https://www.apple.com/v/iphone-14/c/images/overview/design/gallery_camera_blue__wjwphz5g2tua_large.jpg", 9);
    productManager.addProduct("Telefono", "Iphone 14 plus", 1450, "https://www.apple.com/euro/iphone-14-pro/a/screens_alt/images/overview/design/design_startframe__cffzwjeyro2q_large.jpg", 20);
}


app.get('/:productId', (request, response)=>{
    const product = product.find(u => u.id === request.params.productId);
    if (product) {
        response.send(product);
    }
    response.send({message: "Producto no encontrado."});
});


app.use(express.urlencoded({extended: true}));


app.get('/product/query', (request, response) =>{
    let price = request.query.price;
    if (price) {
        response.send(product.filter(u => u.price === price));
    }
    response.send(product);
});

const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => {
    console.log(`Servidor escuchando por el puerto: ${SERVER_PORT}`);
});