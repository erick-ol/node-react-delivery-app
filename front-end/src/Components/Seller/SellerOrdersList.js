import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SellerOrdersList = () => {
  const { data } = useSelector((state) => state.sellerOrders);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/seller/orders/${id}`);
  };

  return (
    <div>
      {data.map((order) => {
        const date = new Date(order.saleDate).toLocaleDateString('pt-BR');
        console.log(date);
        return (
          <button type="button" key={ order.id } onClick={ () => handleClick(order.id) }>
            <p>
              Pedido
              <span data-testid={ `seller_orders__element-order-${order.id}` }>
                {order.id}
              </span>
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
              {order.status}
            </p>
            <p data-testid={ `seller_orders__element-order-date-${order.id}` }>
              {date}
            </p>
            <p>
              R$
              <span data-testid={ `seller_orders__element-card-price-${order.id}` }>
                {order.totalPrice.replace('.', ',')}
              </span>
            </p>
            <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
              { `${order.deliveryAddress}, ${order.deliveryNumber}` }
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default SellerOrdersList;
