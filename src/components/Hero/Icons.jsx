export function Icons(props) {
  return (
    <div className={`absolute rounded-md  z-10 ${props.position} `}>
      <img
        className="p-1 shadow-md shadow-green-500 border rounded-xl bg-white w-full"
        src={props.icon}
        alt={props.alt}
      />
    </div>
  );
}
