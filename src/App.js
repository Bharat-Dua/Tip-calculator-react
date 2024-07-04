import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tipPercentage = (percentage1 + percentage2) / 2;
  const tip = ((bill * tipPercentage) / 100).toFixed(2);
  const total = parseFloat(bill + parseFloat(tipPercentage)).toFixed(2);
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <InputBill bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{" "}
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={bill} tip={tip} total={total} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function InputBill({ bill, onSetBill }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter the bill amount"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value || "")}
      />
    </>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was ok(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip, total }) {
  return (
    <h2>
      you pay ${total} (${bill}+${tip} tip)
    </h2>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
export default App;
