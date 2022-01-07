import { Component } from "react";
import styles from "./components/styles.module.css";

//import "./App.css";
import LoadSpinner from "./components/Loader";
import SearchBar from "./components/Searchbar";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery";
import fetchPicture from "./components/Api";
import Modal from "./components/Modal";
import Button from "./components/Button";
//import Img from "./components/img";

export default class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    loading: false,
    largeModalImage: "",
    alt: "",
    error: null,
    showModal: false,
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

  backDroppCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      this.toggleModal();
    }
  };

  fechImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({
      loading: true,
    });
    fetchPicture(searchQuery, currentPage)
      .then((hits) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => {
        currentPage > 1 && this.scrollTo();
        this.setState({
          loading: false,
        });
      });
  };

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
      //largeModalImage: this.props.hits.largeImageURL,
    });
  };

  toggleModal() {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }
  onClickGalleryItem = ({ largeImageURL, tags }) => {
    this.setState({ largeModalImage: largeImageURL, alt: tags });
    this.toggleModal();
  };

  render() {
    const { loading, images, showModal, largeModalImage, alt } = this.state;

    return (
      <div className={styles.div}>
        {showModal && (
          <Modal
            largeImageURL={largeModalImage}
            alt={alt}
            onClickbackDrop={this.backDroppCloseModal}
          />
        )}
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={images}
          setLargImg={this.onClickGalleryItem}
          onClick={this.toggleModal}
        />
        {images.length > 0 && <Button onClick={this.fechImages} />}
        <ToastContainer auotoclose={2000} />
        {loading && <LoadSpinner />}
        {images && <div>{images.name} </div>}
      </div>
    );
  }
}
