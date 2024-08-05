import MyImageComponent from "./MyImageComponent";

export default function MyGalleryComponent() {
  return (
    <div className="imageContainer">
      <MyImageComponent
        imageUrl="https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="An absolutely terrifying kitten"
      />
      <MyImageComponent
        imageUrl="https://images.unsplash.com/photo-1721833144160-1bb72d04ff4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="two cuddly Otters"
      />
      <MyImageComponent
        imageUrl="https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        altText="A polar bear waving hello"
      />
    </div>
  );
}
