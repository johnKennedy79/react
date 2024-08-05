import MyButton from "./button";

export default function MyBigListOfButtons() {
  return (
    <div className="BtnContainer">
      <MyButton caption="Start" />
      <MyButton caption="Stop" />
      <MyButton caption="Next" />
      <MyButton caption="Previous" />
      <MyButton caption="FastForward" />
      <MyButton caption="Rewind" />
    </div>
  );
}
