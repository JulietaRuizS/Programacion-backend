class Products{

    static id= 0;

    constuctor(title, description, price, image, code, stock){
        this.title= title;
        this.description= description;
        this.price= price;
        this.image= image;
        this.code= code;
        this.stock= stock;
    }
};
class ProductManager{
    #products;
    #dirPath;
    #filePath;
    #fileSystem;

    constructor(){
        this.#products = new Array ();
        this.#dirPath = "./Desafio2/files";
        this.#filePath = this.#dirPath+"/products.json";
        this.#fileSystem = require ('fs');

    }

    addProduct = async ()=>{
        await this.#fileSystem.promises.mkdir(this.#dirPath , { 
        recursive: true});
        if(!this.#fileSystem.existSync(this.#filePath)){
            await this.#fileSystem.promises.writeFile(this.#filePath, "[]");
        }
    }
    getProducts = () => {
        return this.products;
    }
    createNewProduct = async (title, description, price, image, code,stock) =>{
        let newProduct = new Products (title, description, price, image, code, stock);
        console.log ("Crear Producto: nuevo producto creado");
        console.log (createNewProduct);
        try{
            await this.#addProduct();
            await this.consultarProd();
            this.#products.push (newProduct);
            console.log("Productos actualizados");
            console.log(this.#products);
            await this.#fileSystem.promises.writeFile (this.#filePath, JSON.stringify (this.#products));
        } catch (error) {
            console.error('Error cargando nuevo producto: JSON.stringify (newProduct)}, detalle del error: ${error}');
            throw Error ('Error  cargando nuevo producto: JSON.stringify(newProduct)}, detalle del error: ${error}'); 
    };

consultarProd = async ()=>{
    try{
        await this.#createNewProduct ();
        let productFile = await this.#fileSystem.promises.readFile (this.#filePath, "utf-8");
        console.info ("Archivo JSON obtenido desde archivo");
        console.log(productFile);
        this.#products = JSON.parse (productFile);
        console.log("Productos encontrados");
        console.log(this.#products);
        return this.#products;
    } catch (error) {
        console.error('Error consultando los productos por archivo, valide el archivo: ${this.#dirPath}, detalle del error: ${error}');
        throw Error ('Error consultando los productos por archivo, valide el archivo: ${this.#dirPath}, detalle del error: ${error}');
    }
};

getproductById = (id) =>{
        let prodFile = this.#fileSystem.promises.readFile(this.#filePath, "utf-8");
        this.#products = JSON.parse (prodFile);
        let productId = this.products.find((producto)=> producto.id ===id)
    if (productId){
        console.log("El producto esta disponible" + productId);
        console.log (productId);
        }
    else {
        console.log("El productono se encuentra disponible")
    }
};




module.exports = ProductManager
    }
}
