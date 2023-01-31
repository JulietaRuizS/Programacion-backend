class Products{

    static id= 0;

    constuctor(title, description, price, image, code, stock){
        this.id= ++Products.id;
        this.title= title;
        this.description= description;
        this.price= price;
        this.image= image;
        this.code= code;
        this.stock= stock;
    }
};
class ProductManager{
    constructor(){
        this.products = new Array ();
    }
    getProducts = () => {
        return this.products;
    }
    addNewProduct = (title, description,price, image, code, stock) =>{
        if (this.products.some(producto => products.code=== code)){
            alert("Se ha repetido el codigo!");
        } else{
            let newproduct = new product (title, description,price, image, code, stock);
            this.products.push (newproduct);
            alert ("Se incorporo el producto exitosamente")
        }
    }
    getProductById(id){
        if(this, this.products.some(products=> products.id === id)){
            return this.products;
        }else{
            Error("Producto no encontrado");
        }
    }
};

let products = new Products ();
let productManager = new ProductManager ();
console.log(productManager.getProducts ());







