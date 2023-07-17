class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 0;
    }
  
    addProduct(product) {
      // Validar que todos los campos sean obligatorios
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log('Todos los campos son obligatorios');
        return;
      }
  
      // Validar que no se repita el campo "code"
      if (this.products.some((p) => p.code === product.code)) {
        console.log('El código del producto ya existe');
        return;
      }
  
      // Incrementar el id autoincrementable
      this.productId++;
  
      // Agregar el producto al arreglo
      product.id = this.productId;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log('Producto no encontrado');
      }
    }
  }
  
  // Ejemplo de uso
  const productManager = new ProductManager();
  
  // Agregar productos
  productManager.addProduct({
    title: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 10.99,
    thumbnail: './ruta/producto1.jpg',
    code: '001',
    stock: 50,
  });
  
  productManager.addProduct({
    title: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 19.99,
    thumbnail: './ruta/producto2.jpg',
    code: '002',
    stock: 30,
  });
  
  // Obtener todos los productos
  const allProducts = productManager.getProducts();
  console.log(allProducts);
  
  // Obtener un producto por su id
  const product = productManager.getProductById(1);
  console.log(product);
  
  // Intentar obtener un producto con un id inexistente
  const nonExistingProduct = productManager.getProductById(3);