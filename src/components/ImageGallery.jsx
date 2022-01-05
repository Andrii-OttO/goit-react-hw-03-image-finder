import styles from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} openModal={openModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
