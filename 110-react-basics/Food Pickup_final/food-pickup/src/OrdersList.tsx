import { Order, OrderStatus } from './model/order';
import { List } from './molecules/List';
import { updateFirebaseOrderStatus, useFirebaseOrders } from './utils/firebase-utils';

export function OrdersList() {
  const orders = useFirebaseOrders();

  const orderReadyForPickup = (order: Order) => {
    order.markAsReady();
    updateFirebaseOrderStatus(order.id, order.status);
  };

  const orderPickedUp = (order: Order) => {
    order.markAsPickedUp();
    updateFirebaseOrderStatus(order.id, order.status);
  };

  const getPreparingOrders = () => {
    return orders.filter((order) => order.status === OrderStatus.Preparing);
  };

  const getReadyOrders = () => {
    return orders.filter((order) => order.status === OrderStatus.Ready);
  };

  return (
    <>
      <h2 className="text-6xl">Wird zubereitet</h2>
      <List
        items={getPreparingOrders().map((order) => ({
          id: order.id,
          title: order.number,
          buttonTitle: 'Abholbereit',
          onClick: () => orderReadyForPickup(order),
        }))}
      ></List>
      <h2 className="text-6xl">Abholbereit</h2>
      <List
        items={getReadyOrders().map((order) => ({
          id: order.id,
          title: order.number,
          buttonTitle: 'Abgeholt',
          onClick: () => orderPickedUp(order),
        }))}
      ></List>
    </>
  );
}
