import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from "../../services/api";

import * as CartActions from "../../store/modules/cart/actions";

import { ProductList, Search } from "./styles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function parsedString(input) {
    input = input.toLowerCase();

    return input;
  }

  return (
    <>
      <Search>
        <input
          type="text"
          placeholder="Qual filme procura?"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </Search>
      <ProductList>
        {products
          .filter(
            (product) =>
              parsedString(product.title).match(parsedString(filter)) ||
              filter === ""
          )
          .map((product) => (
            <li key={product.title}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                onClick={() => handleAddProduct(product.id)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#fff" />
                  {amount[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
      </ProductList>
    </>
  );
}
