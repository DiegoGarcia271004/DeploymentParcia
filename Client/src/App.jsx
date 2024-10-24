import Form from "./Components/Form/Form";
import React from "react";
import "./App.css";
import UserCards from "./Components/UserCards/UserCards";

function App() {
  return (
    <>
      <section>
        <Form />
      </section>
      <section>
        <UserCards />
      </section>
    </>
  );
}

export default App;
