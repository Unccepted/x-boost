export function Icons(props) {
  return (
    <a
      href="/"
      className="text-gray-500 transition-colors bg-transparent duration-300 hover:text-gray-400 mr-auto"
    >
      <img src={props.src} alt="" className="h-10" />
    </a>
  );
}
