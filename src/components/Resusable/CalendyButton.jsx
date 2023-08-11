export function CalendyButton(props) {
  const openCalendlyInNewWindow = (e) => {
    e.preventDefault();
    window.open("https://calendly.com/xboosthub/online-meeting", "_blank");
  };

  return (
    <button onClick={openCalendlyInNewWindow} className={props.className}>
      {props.buttonText}
    </button>
  );
}
