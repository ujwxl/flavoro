import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

function Success() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36b7d7" />
      ) : 
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Order Successful!</h2>
          <p>Your order has been successfully placed</p>
        </div>
      }
    </div>
  );
}

export default Success;
