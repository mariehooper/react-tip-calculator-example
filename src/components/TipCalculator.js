import React, { useState } from "react";
import "./TipCalculator.css";
import TipForm from "./TipForm";

export default function TipCalculator() {
  const [splitBillTotal, setSplitBillTotal] = useState(0);

  function calculateBillTotal(billAmount, tipPercentage, split) {
    const billNum = Number(billAmount);
    const tipNum = 1 + Number(tipPercentage) / 100;
    const billTotal = (billNum * tipNum) / Number(split);
    setSplitBillTotal(billTotal);
  }

  return (
    <div className="calculator">
      <h1>Tip Calculator</h1>
      <TipForm calculateBillTotal={calculateBillTotal} />
      <div className="total">
        <span>Split Bill Total:</span>
        <span className="split-total">${splitBillTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
