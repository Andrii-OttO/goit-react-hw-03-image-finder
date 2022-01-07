// import { Component } from "react";
// export default class ImageData extends Component {
//   state = {
//     flover: null,
//     error: null,
//     loading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.images !== this.props.images) {
//       console.log("images");
//       this.setState({ loading: true, images: null });
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.images}&page=1&key=25101994-7bfa15225df0fe408aedebc37&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error("arguments"));
//         })
//         .then((images) => this.setState({ images }))
//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.error && <h1>{this.state.error.message}</h1>}
//         {this.state.loading && <h1>loading..</h1>}
//         <h1>img</h1>
//         {this.state.images && (
//           <ul className="gallery">
//             <li className="ImageGalleryItem">
//               <img
//                 width="300"
//                 className={["ImageGalleryItem-image"]}
//                 src={this.state.images.hits[0].webformatURL}
//                 alt={this.state.images.tags}
//               />
//             </li>
//           </ul>
//         )}
//       </div>
//     );
//   }
//}
