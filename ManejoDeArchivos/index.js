const ProductManager = require('./ProductManager');

// Ruta al archivo donde se guardarán los productos
const filePath = 'products.json';

// Crear una instancia de ProductManager
const productManager = new ProductManager(filePath);

// Agregar un producto
const productToAdd = {
  title: 'Producto de ejemplo',
  description: 'Este es un producto de prueba',
  price: 19.99,
  thumbnail: './ruta/imagen.jpg',
  code: '001',
  stock: 10,
};

productManager.addProduct(productToAdd);

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obtener un producto por su id
const productIdToFind = 1;
const foundProduct = productManager.getProductById(productIdToFind);
console.log(foundProduct);

// Actualizar un producto
const productIdToUpdate = 1;
const updatedFields = {
  title: 'Producto actualizado',
  price: 29.99,
};

productManager.updateProduct(productIdToUpdate, updatedFields);

// Eliminar un producto
const productIdToDelete = 2;
productManager.deleteProduct(productIdToDelete);
