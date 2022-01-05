import PropTypes from "prop-types";
import styles from "./styles.module.css";

const ImageGalleryItem = ({ images, openModal }) => {
  return images.map((Element) => (
    <li
      key={Element.id}
      className={styles.ImageGalleryItem}
      onClick={() => {
        openModal({ src: Element.largeImageURL, id: Element.id });
      }}>
      <img
        className={styles["ImageGalleryItem-image"]}
        src={Element.webformatURL}
        alt={Element.tags}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func,
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
