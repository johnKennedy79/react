import "./App.css";
import MyBigListOfButtons from "./components/MyBigListofbuttons";
import MyGalleryComponent from "./components/MyGalleryCompnent";
import MyComponent from "./components/MyComp";
function App() {
  return (
    <>
      <div className="page">
        <MyComponent firstName="John" lastName="Kennedy" />;
        <MyBigListOfButtons />
        <MyGalleryComponent />
      </div>
    </>
  );
}

export default App;
