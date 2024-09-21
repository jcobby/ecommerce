import React from "react";
import products from "../products"; // Import your product list

function ProductDetailPage({ params }) {
  const { productDetailID } = params;
console.log('params di', params)
  // Find the product by ID from the list of products
  const product = products.find((item) => item.id.toString() === productDetailID);

  // If product is not found, show an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  console.log('products ', product)

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description || "No description available."}</p>

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">₵ {product.price}</span>
          </div>

          {/* Buttons for actions */}
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition duration-200">
              Add to Cart
            </button>
            <button className="border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((item) => item.category === product.category && item.id !== product.id)
            .map((relatedProduct) => (
              <div key={relatedProduct.id} className="border rounded-lg p-4">
                <img
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="mt-4 font-semibold">{relatedProduct.name}</h3>
                <p className="text-gray-600">₵ {relatedProduct.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
