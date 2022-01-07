import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ImageGalleryItem = ({ images, onClickImage }) => {
  return images.map(({ webformatURL, largeImageURL, tags, id }) => (
    <li
      key={id}
      className={styles.ImageGalleryItem}
      onClick={() => {
        // console.log("the", largeImageURL, tags);
        onClickImage({ largeImageURL, tags });
      }}>
      <img
        className={styles["ImageGalleryItem-image"]}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClickImage: PropTypes.func,
};
export default ImageGalleryItem;
//////////////////////
// import PropTypes from "prop-types";
// import styles from "./styles.module.css";

// const ImageGalleryItem = ({ images, openModal }) => {
//   return images.map((e) => (
//     <li
//       key={e.id}
//       className={styles.ImageGalleryItem}
//       onClick={() => {
//         openModal({ src: e.largeImageURL, id: e.id });
//       }}>
//       <img
//         className={styles["ImageGalleryItem-image"]}
//         src={e.webformatURL}
//         alt={e.id}
//       />
//     </li>
//   ));
// };

// ImageGalleryItem.propTypes = {
//   images: PropTypes.array.isRequired,
//   openModal: PropTypes.func,
// };
// export default ImageGalleryItem;
// //////////////////////
