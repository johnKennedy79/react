export default function MyComponent(props) {
  return (
    <div className="text-amber-300 border-red-500 border border-solid text-center m-2.5 p-2.5">
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}
