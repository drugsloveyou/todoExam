import React, { Component } from "react";
import Header from "../containers/Header";
import MainSection from "../containers/MainSection";
import Footer from "../containers/Footer";

export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}
