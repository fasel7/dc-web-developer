import { DataSnapshot, onValue, ref, set, update } from 'firebase/database';
import { useEffect, useState } from 'react';
import { FirebaseOrder, Order, OrderStatus } from '../model/order';
import { database } from './firebase';

export const firebasePath = 'shared';

function getOrderRef(orderId: string) {
  return ref(database, `/${firebasePath}/${orderId}`);
}

export function useFirebaseOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const ordersRef = ref(database, `/${firebasePath}`);
    onValue(ordersRef, (snapshot: DataSnapshot) => {
      if (!snapshot.exists()) {
        setOrders([]);
        return;
      }
      const data: { [key: string]: FirebaseOrder } = snapshot.val();
      setOrders(Object.values(data).map((order) => new Order(order)));
    });
  }, []);

  return orders;
}

export function createFirebaseOrder(order: FirebaseOrder) {
  const uuid = self.crypto.randomUUID();
  order.id = uuid;
  const ordersRef = getOrderRef(order.id);
  set(ordersRef, order);
}

export function updateFirebaseOrderStatus(orderId: string, status: OrderStatus) {
  const ordersRef = getOrderRef(orderId);
  update(ordersRef, { status: status });
}
