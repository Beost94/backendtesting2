interface MenuItemProps {
  product: {
    productId: number;
    productName: string;
    price: number;
    brandName: string;
    imageUrl: string;
  };
}
function MenuItem({ product }: MenuItemProps) {
  return (
    <li className="p-4 border rounded shadow-md">
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="w-32 h-32 object-cover"
      />
      <h3 className="text-lg font-bold">{product.productName}</h3>
      <p className="text-gray-700">${product.price}</p>
    </li>
  );
}

export default MenuItem;
