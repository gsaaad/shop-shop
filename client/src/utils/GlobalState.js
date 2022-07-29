import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

// ? basic empty context/provider
// const StoreContext = createContext();
// const {Provider} = StoreContext;

const StoreContext = createContext();
const { Provider } = StoreContext;

// store provider
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });

  //   to confirm it works!

  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

// provider needs context
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
