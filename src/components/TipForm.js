import React, { useState, useEffect } from "react";
import "./TipForm.css";
import IncrementField from "./IncrementField";

export default function TipForm({ calculateBillTotal }) {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTipPecentage] = useState(0);
  const [split, setSplit] = useState(1);

  useEffect(() => {
    calculateBillTotal(billAmount, tipPercentage, split);
  }, [billAmount, tipPercentage, split]);

  return (
    <form>
      <div className="field">
        <label htmlFor="billAmount">Bill Amount</label>
        <input
          id="billAmount"
          type="number"
          value={billAmount}
          onChange={e => setBillAmount(e.currentTarget.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="tipPercentage">Tip (%)</label>
        <IncrementField
          increment={5}
          min={0}
          id="tipPercentage"
          value={tipPercentage}
          onChange={setTipPecentage}
        />
      </div>
      <div className="field">
        <label htmlFor="split">Split</label>
        <IncrementField
          increment={1}
          min={1}
          id="split"
          value={split}
          onChange={setSplit}
        />
      </div>
    </form>
  );
}
