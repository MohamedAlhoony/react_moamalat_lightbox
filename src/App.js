import logo from "./logo.svg";
import "./App.css";
import Moamalat from "reactjs-moamalat";
function App() {
  const payButtonStyle = {
    color: "#000000",
    backgroundColor: "#CCCCCC",
    borderRadius: "10px",
  };
  const date = Date.now();
  return (
    <div className="App">
      <Moamalat
        Amount={"1000"}
        TID={"99179395"}
        MID={"10081014649"}
        MerchantReference="eeeeeeeeeeeefasdfetter"
        secretKey={
          "39636630633731362D663963322D346362642D386531662D633963303432353936373431"
        }
        dateTime={date}
        errorCallback={(error) => {
          console.log(error);
        }}
        completePaymentCallback={() => {}}
        errorPaymentCallback={(error) => {
          console.log(error);
        }}
        cancelPaymentCallback={() => {}}
        env={"staging"}
        payButtonStyle={payButtonStyle}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
