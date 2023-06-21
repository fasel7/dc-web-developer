export interface FirebaseOrder {
  id: string;
  number: string;
  status: OrderStatus;
  createdAt: string;
}

export class Order {
  id: string;
  number: string;
  status: OrderStatus;
  createdAt: Date;

  constructor(order: FirebaseOrder) {
    this.id = order.id;
    this.number = order.number;
    this.status = order.status;
    this.createdAt = new Date(order.createdAt);
  }

  get summary(): string {
    return `${this.number} (${this.createdAt.toLocaleDateString()})`;
  }

  markAsReady() {
    this.status = OrderStatus.Ready;
  }

  markAsPickedUp() {
    this.status = OrderStatus.PickedUp;
  }
}

export enum OrderStatus {
  Preparing,
  Ready,
  PickedUp,
}
