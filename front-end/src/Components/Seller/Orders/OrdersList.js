import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sellerOrdersGet } from '../../../store/sellerOrders';

const OrdersList = () => {
  const { data } = useSelector((state) => state.sellerOrders);
  const { info: { id, token } } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!data) dispatch(sellerOrdersGet(token, id));
  }, [data, dispatch, id, token]);

  const handleClick = (orderId) => {
    navigate(`/seller/orders/${orderId}`);
  };

  return (
    <div>
      {data ? data.map((order) => {
        const date = new Date(order.saleDate).toLocaleDateString('pt-BR');
        return (
          <button
            type="button"
            key={ order.id }
            onClick={ () => handleClick(order.id) }
            data-testid={ `seller_orders__element-order-id-${order.id}` }
          >
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
      }) : <p>Sem pedidos.</p>}
    </div>
  );
};

export default OrdersList;
