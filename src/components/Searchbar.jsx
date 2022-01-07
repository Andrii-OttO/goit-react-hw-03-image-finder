import { Component } from "react";
import { ReactComponent as MyImg } from "../img/307875.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./styles.module.css";

export default class SearchBar extends Component {
  state = {
    query: "",
  };

  hanleChange = (event) => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
    //console.log(this.state.query);
  };

  HandleSubmit = (event) => {
    event.preventDefault();
    if (this.state.query.trim() === "") {
      toast.error("write searching images");
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.HandleSubmit} className={style.SearchForm}>
          <button type="submit" className={style["SearchForm-button"]}>
            <MyImg style={{ marginRight: 8 }} />

            <span className={style["SearchForm-button-label"]}>Search</span>
          </button>

          <input
            className={style["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.hanleChange}
          />
        </form>
      </header>
    );
  }
}
