import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order ID is <span className="font-mono font-bold">{orderId}</span>.
        </p>
        <Link
          to="/products"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default Success;
