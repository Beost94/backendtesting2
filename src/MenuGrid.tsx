import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import Filter from "./Filter";

interface Product {
  productId: number;
  productName: string;
  price: number;
  brandName: string;
  imageUrl: string;
}

interface ProductResponse {
  content: Product[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

function MenuGrid() {
  type SelectedFilters = {
    [key: string]: string[];
  };
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const { category, mainCategory } = useParams(); // Get "driver" from /driver
  const fetchCategory = category || mainCategory;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!category) return;

    const params = new URLSearchParams();

    params.append("category", category);

    for (const key in selectedFilters) {
      selectedFilters[key].forEach((val) => {
        params.append(key.toLowerCase(), val);
      });
    }

    const query = params.toString();
    const fullUrl = `http://localhost:8080/products/MenuGrid?${query}`;

    fetch(fullUrl)
      .then((res) => res.json())
      .then((data: ProductResponse) => setProducts(data.content))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category, selectedFilters]);

  return (
    <>
      <ul className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <MenuItem key={product.productId} product={product} />
        ))}
      </ul>
      <Filter category={fetchCategory} onFilterChange={setSelectedFilters} />
    </>
  );
}

export default MenuGrid;
