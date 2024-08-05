export default function MyComponent(props) {
  return (
    <div className="greetingDiv">
      Hello, {props.firstName} {props.lastName}!
    </div>
  );
}
