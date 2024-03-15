const orders = [
    {
      "id": 1,
      "orderID": "ORD123456",
      "customerName": "John Doe",
      "orderDate": "2024-03-14T10:30:00Z",
      "status": "Pending",
      "products": [
        {
          "id": 1,
          "name": "Laptop",
          "quantity": 1
        },
        {
          "id": 2,
          "name": "Smartphone",
          "quantity": 2
        }
      ]
    },
    {
      "id": 2,
      "orderID": "ORD789012",
      "customerName": "Jane Smith",
      "orderDate": "2024-03-14T11:45:00Z",
      "status": "Shipped",
      "products": [
        {
          "id": 3,
          "name": "Headphones",
          "quantity": 1
        }
      ]
    },
    {
      "id": 3,
      "orderID": "ORD345678",
      "customerName": "Alice Johnson",
      "orderDate": "2024-03-14T13:15:00Z",
      "status": "Delivered",
      "products": [
        {
          "id": 4,
          "name": "T-shirt",
          "quantity": 3
        },
        {
          "id": 5,
          "name": "Jeans",
          "quantity": 2
        }
      ]
    }
  ]

export default orders