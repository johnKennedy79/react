// export default function MyImageComponent(props) {
//   return (
//     <div>
//       <img src={props.imageUrl} alt={props.altText} width="400px" />
//     </div>
//   );
// }

export default function MyImageComponent({ imageUrl, altText }) {
  return (
    <div>
      <img className="image" src={imageUrl} alt={altText} width="400px" />
    </div>
  );
}
