import React, { Component } from "react";
import SearchBar from "../SearchBar/serachBar";
import Result from "../Result/result";
import Header from "../Header/header";
import SetLength from "../SetLength/setLength";
import Footer from "../Footer/Footer";
class Home extends Component {
  state = {
    keyword: "",
    numLetters: 0,
    typos: ""
  };
  setKey = word => {
    return new Promise(resolve => {
      this.setState({ keyword: word });
      resolve(word);
    }).then(() => {
      this.permutation(this.state.numLetters);
    });
  };
  setKeyword = event => {
    this.setKey(event.target.value);
  };
  subPermu = (str, prefix, array) => {
    if (!str) {
      if (!array.includes(prefix)) {
        array.push(prefix);
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        let rem = str.substring(0, i) + str.substring(i + 1);
        this.subPermu(rem, prefix + str.charAt(i), array);
      }
    }
  };
  permu = (str, array) => {
    this.subPermu(str, "", array);
  };
  permutation = number => {
    if (number == 0) return;
    this.setState({ numLetters: number });
    let array = [];
    let rem = this.state.keyword.slice(-number);
    let ori = this.state.keyword.slice(0, -number);
    this.permu(rem, array);
    let newArr = array.map(value => {
      return ori + value;
    });
    this.setState({ typos: newArr.join(",") });
  };
  render() {
    return (
      <div>
        <Header />
        <SearchBar keyword={this.state.keyword} setKeyword={this.setKeyword} />
        <SetLength
          keyword={this.state.keyword}
          permutation={this.permutation}
        />
        <Result typos={this.state.typos} />
        <Footer />
      </div>
    );
  }
}

export default Home;
