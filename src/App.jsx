import "./App.css";
import MyBigListOfButtons from "./components/MyBigListofbuttons";
import MyGalleryComponent from "./components/MyGalleryCompnent";
import MyComponent from "./components/MyComp";
function App() {
  return (
    <>
      <div className="bg-zinc-800 border-s-red-50 flex-col items-center justify-center w-full h-full">
        <MyComponent firstName="John" lastName="Kennedy" />;
        <MyBigListOfButtons />
        <MyGalleryComponent />
      </div>
    </>
  );
}

export default App;
