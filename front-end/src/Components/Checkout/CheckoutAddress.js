import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USERS_GET, SALES_POST } from '../../api/index';
import validateCheckout from '../../utils/validateCheckout';

function CheckoutAddress() {
  /** pegar cartChosenProduct no store, criar/redux  para usar na soma */
  const cartChosenProduct = useSelector((state) => state.cartChosenProduct);
  const [filterSellers, setFilterSellers] = useState([]);
  const [address, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [seller, setSeller] = useState(0);
  /** usar disable */
  const [checkoutButton, setCheckoutButton] = useState(true);
  const navigate = useNavigate();

  const saleProducts = () => {
    const products = [];
    cartChosenProduct
      .forEach((prod) => {
        const { id, quantity } = prod;
        const product = { productId: id, quantity };
        products.push(product);
      });
    return products;
  };

  const sumTotal = () => {
    let totalPrice = 0;
    cartChosenProduct
      .forEach((prod) => {
        totalPrice += prod.quantity * prod.price;
      });
    return totalPrice;
  };

  useEffect(() => {
    /**  */
    validateCheckout.isValid({ address, number })
      .then((valid) => {
        if (valid) setCheckoutButton(false);
        else setCheckoutButton(true);
      });
  });

  const endOrder = async (e) => {
    e.preventDefault();
    const totalPrice = sumTotal();
    const products = saleProducts();

    const salesData = {
      sellerId: seller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      products,
    };
    const { data } = SALES_POST(salesData);
    localStorage.setItem('cart', JSON.stringify([]));
    navigate.push(`./orders/${data.id}`);
  };

  useEffect(() => {
    USERS_GET()
      .then((response) => setFilterSellers(response.data
        .filter((client) => client.role === 'seller')));
  }, []);

  useEffect(() => {
    if (filterSellers.length > 0) setSeller(filterSellers[0].id);
  }, [filterSellers]);

  return (
    <section className="checkout-address">
      <div className="checkout-address-input-container">
        <label className="checkout-address-input" htmlFor="sellers">
          P. Vendedora Responsável
          <select
            required
            value={ seller }
            name="sellers"
            onChange={ (e) => setSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"
          >
            {
              filterSellers
                .map((userSeller, index) => (
                  <option key={ index } value={ userSeller.id }>
                    { userSeller.name }
                  </option>))
            }
          </select>
        </label>
        <label className="checkout-address-input street-name" htmlFor="address">
          Endereço
          <input
            required
            type="text"
            name="address"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setAdress(e.target.value) }
          />
        </label>
        <label className="checkout-address-input house-number" htmlFor="number">
          Número
          <input
            required
            type="text"
            name="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>
      </div>
      <button
        className="checkout-button"
        type="submit"
        data-testid="customer_checkout__button-submit-order"
        disabled={ checkoutButton }
        onClick={ endOrder }
      >
        Finalizar Pedido
      </button>
    </section>
  );
}

export default CheckoutAddress;
