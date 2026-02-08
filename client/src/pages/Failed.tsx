import React from "react";
import { Link } from "react-router-dom";

const Failed: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-gray-700 mb-6">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back to Cart
        </Link>
      </div>
    </div>
  );
};

export default Failed;
