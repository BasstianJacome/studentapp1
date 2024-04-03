import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";
import StudentForm from "./components/StudentForm";

const App = () => {
  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
   
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <StudentForm onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
