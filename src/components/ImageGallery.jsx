import styles from "./styles.module.css";
import ImageGalleryItem from "./ImageGalleryItem";
import PropTypes from "prop-types";

function ImageGallery({ images, setLargImg }) {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} onClickImage={setLargImg} />
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClickImage: PropTypes.func,
};

export default ImageGallery;
