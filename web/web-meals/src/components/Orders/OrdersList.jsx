import OrderCard from './OrdersCard';

const OrderList = ({ orders }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(261px,_1fr))] justify-items-center gap-10 max-w-[1000px] mx-auto py-10">
      {orders.map((order) => (
        <OrderCard key={order.url} orderUrl={order.url} />
      ))}
    </section>
  );
};
export default OrderList;
