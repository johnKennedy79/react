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
      <img
        className="p-2.5 items-center border border-solid border-red-600"
        src={imageUrl}
        alt={altText}
        width="400px"
      />
    </div>
  );
}
