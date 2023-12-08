import React from "react";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "6rem" }}
          src={require("./errorImage.png")}
          alt=""
        />
        <div
          style={{
            color: "red",
            fontSize: "1.2rem",
            fontWeight: 500,
            marginLeft: "2px",
          }}
        >
          Payment Failed
        </div>
      </div>
      <div style={{ padding: "2rem", fontWeight: 400 }}>
        Your payment was not successfully processed. Please contact our customer
        support or try another payment method.{" "}
      </div>
      <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>
        Redirecting in 10 seconds...
      </div>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center',height:'5rem',gap:'4px'}}>
        <img
          style={{ width: "6rem",marginTop:'1rem' }}
          src={require("./hdfc.png")}
          alt=""
        />
        {/* <img
          style={{ width: "6rem" }}
          src={require("./icici.png")}
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default App;
