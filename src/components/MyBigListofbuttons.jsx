import MyButton from "./button";

export default function MyBigListOfButtons() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2.5 p-2.5 border-red-600 border-solid border">
      <MyButton caption="Start" />
      <MyButton caption="Stop" />
      <MyButton caption="Next" />
      <MyButton caption="Previous" />
      <MyButton caption="FastForward" />
      <MyButton caption="Rewind" />
    </div>
  );
}
