export default function MyButton({ caption }) {
  return (
    <button className="text-amber-200 hover:text-black bg-violet-700 hover:bg-violet-300 p-2.5 border border-red-600 border-solid">
      {caption}
    </button>
  );
}
