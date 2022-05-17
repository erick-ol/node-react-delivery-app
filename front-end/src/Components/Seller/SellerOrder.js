import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sellerOrdersGet } from '../../store/sellerOrders';
import { resetState, statusPut } from '../../store/status';
import dataTestId from './data-testids';
import SellerNavbar from './SellerNavbar';

const SellerOrder = () => {
  const { data } = useSelector((state) => state.sellerOrders);
  const { info } = useSelector((state) => state.user);
  const { data: statusData } = useSelector((state) => state.status);
  const [order, setOrder] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  React.useEffect(() => {
    if (data) setOrder(data.find((o) => o.id === +id));
  }, [data, id]);

  React.useEffect(() => {
    if (order) setDate(new Date(order.saleDate).toLocaleDateString('pt-BR'));
  }, [order]);

  React.useEffect(() => {
    if (statusData) {
      dispatch(resetState());
      dispatch(sellerOrdersGet(info.token, info.id));
    }
  }, [statusData, dispatch, info]);

  const handlePrepare = (e) => {
    e.preventDefault();
    dispatch(statusPut(info.token, id, 'preparing'));
  };

  const handleDeliver = (e) => {
    e.preventDefault();
    dispatch(statusPut(info.token, id, 'transit'));
  };

  return (
    <>
      <SellerNavbar />
      {order && (
        <>
          <header>
            <p>
              Pedido:
              {' '}
              <span data-testid={ dataTestId.orderId }>{order.id}</span>
            </p>
            <p data-testid={ dataTestId.orderDate }>{date}</p>
            <p data-testid={ dataTestId.orderStatus }>{order.status}</p>
            <button
              disabled={ order.status === 'Entregue'
              || order.status === 'Em Trânsito' || order.status === 'Preparando' }
              type="button"
              onClick={ handlePrepare }
              data-testid={ dataTestId.orderPrepare }
            >
              Preparar pedido
            </button>
            <button
              disabled={ order.status === 'Entregue'
              || order.status === 'Pendente' || order.status === 'Em Trânsito' }
              type="button"
              onClick={ handleDeliver }
              data-testid={ dataTestId.orderDispatch }
            >
              Enviar pedido
            </button>
          </header>
          <p data-testid={ dataTestId.orderVal }>{order.totalPrice.replace('.', ',')}</p>
        </>
      )}
    </>
  );
};

export default SellerOrder;
