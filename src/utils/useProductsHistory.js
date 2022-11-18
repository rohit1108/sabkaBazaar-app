import { useNavigate } from "react-router-dom";

export default function useProductsHistory() {
  const navigate = useNavigate();

  function handleProduct(id) { //1. url url id part added
    if (id) {
      navigate(`/products/${id}`);
    } else {
      navigate(`/products`);
    }
    window.scrollTo(0, 0); // scrool to top
  }

  return {
    handleProduct // url append
  };
}
