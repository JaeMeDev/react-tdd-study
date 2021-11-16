import React, { useState } from "react";
import OrderPage from "./pages/OrderPage/OrderPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import { OrderContextProvider } from "./contexts/OrderContext";
import "./App.css";
import CompletePage from "./pages/CompletePage/CompletePage";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
