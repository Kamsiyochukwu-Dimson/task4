class Customer {
    static totalCustomers = 0;
  
    constructor(customerId, name) {
      this.customerId = customerId; 
      this.name = name; 
      Customer.totalCustomers++; 
    }
  
    static getTotalCustomers() {
      return Customer.totalCustomers;
    }
  
    register() {
      console.log(`Customer ${this.name} has been registered.`);
    }
  
    placeOrder(order) {
      console.log(`${this.name} is placing an order with ID: ${order.orderId}`);
      order.createOrder();
    }
  }
  
  class Order {
    static totalOrders = 0;
  
    constructor(orderId, totalAmount) {
      this.orderId = orderId;
      this.totalAmount = totalAmount; 
      Order.totalOrders++; 
    }
  
    static getTotalOrders() {
      return Order.totalOrders;
    }
  
    createOrder() {
      console.log(`Order ${this.orderId} has been created with total amount: $${this.totalAmount}`);
    }
  
    updateStatus(newStatus) {
      console.log(`Order ${this.orderId} status updated to: ${newStatus}`);
    }
  }
  
  const customer1 = new Customer("C001", "Alice Johnson");
  customer1.register(); 
  
  const order1 = new Order("O001", 29.99); 
  customer1.placeOrder(order1); 
  
  console.log(`Total Customers: ${Customer.getTotalCustomers()}`);
  console.log(`Total Orders: ${Order.getTotalOrders()}`);