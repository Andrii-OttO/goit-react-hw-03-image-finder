import { Component } from "react";
import styles from "./components/styles.module.css";

//import "./App.css";
import LoadSpinner from "./components/Loader";
import SearchBar from "./components/Searchbar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery";
import fetchPicture from "./components/Api";
//import Img from "./components/img";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    loading: false,
    // error: null,
    showModal: false,
    // imageForModal: "",
    // title: "",
    //statuse: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fechImages();
    }
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.toggleModal();
      window.removeEventListener("keydown", this.handleKeyDown);
    }
  };

  ////
  fechImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
      error: null,
    };

    this.setState({
      isLoading: true,
    });
    fetchPicture(options)
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        // {
        //   currentPage > 1 && this.scrollTo();
        // }
        this.setState({
          isLoading: false,
        });
      });
  };
  ////////

  ///////
  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleSubmit = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
    });
    console.log("object", query);
  };
  togleModal() {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  render() {
    return (
      <div className={styles.div}>
        <SearchBar onSubmit={this.handleSubmit} />
        {/* <FetchPicture images={this.state.images} /> */}
        <ImageGallery images={this.state.images} openModal={this.togleModal} />
        {/* <Img images={this.state.images} /> */}
        <ToastContainer auotoclose={2000} />
        {this.state.loading && <LoadSpinner />}
        {this.state.images && <div>{this.state.images.name} </div>}
      </div>
    );
  }
}

//
// async componentDidMount() {
//   this.setState({ loading: true });
//   setTimeout(() => {
//     fetch(
//       "https://pixabay.com/api/?q=cat&page=1&key=25101994-7bfa15225df0fe408aedebc37&image_type=photo&orientation=horizontal&per_page=12"
//       // "https://pixabay.com/api/?key=25101994-7bfa15225df0fe408aedebc37&q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12"
//     )
//       .then((response) => response.json())
//       .then(console.log)
//       .then((picture) => this.setState({ picture }))
//       .then(() => this.setState({ loading: false }));
//   }, 2000);
// }
