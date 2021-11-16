import React from "react";
import OrderPage from "./pages/OrderPage/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
