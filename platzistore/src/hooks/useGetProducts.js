import React, { useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function fetchDate() {
      const response = await axios(API);
      setProducts(response.data);
    }
    fetchDate();
  }, [API]);

  return products;
};

export { useGetProducts };
