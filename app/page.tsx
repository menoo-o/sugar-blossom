type Order = {
  id: string;
  total: number;
  customer: string;
  status: boolean;
};


export default async function Home() {
  try {

    const response = await fetch("http://localhost:3000/api/orders")

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data: { orders: Order[] } = await response.json();
    const { orders } = data; 
    

    return (
      <main>
        <div>
          <h1>Orders</h1>
          <ul>
          {orders.map((order: Order, index: number) => (

            <li key={order.id || index}>
                <br /><br />
             <strong>Order Status:</strong> {order.status ? "Order Filled" : "Unfilled"} <br />
              <strong>Item:</strong> {order.total} <br />
              <strong>Quantity:</strong> {order.customer}

            </li>
            ))}
          </ul>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching orders:", error);

    return (
      <main>
        <div>
          <h1>Orders</h1>
          <p>Error loading orders: {error.message}</p>
        </div>
      </main>
    );
  }
}
