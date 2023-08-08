export function Icons(props) {
  return (
    <div className={`absolute rounded-md  z-10 ${props.position}`}>
      <img
        className="w-12 p-1 shadow-md shadow-green-500 border rounded-xl bg-white lg:w-16"
        src={props.icon}
        alt={props.alt}
      />
    </div>
  );
}
