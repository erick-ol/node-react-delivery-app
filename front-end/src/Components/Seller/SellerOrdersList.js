import React from 'react';
import { useSelector } from 'react-redux';

const SellerOrdersList = () => {
  const { data } = useSelector((state) => state.sellerOrders);

  return (
    <div>
      {data.map((order) => {
        const date = new Date(order.saleDate).toLocaleDateString('pt-BR');
        console.log(date);
        return (
          <div key={ order.id }>
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
          </div>
        );
      })}
    </div>
  );
};

export default SellerOrdersList;
