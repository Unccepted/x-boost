import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

export function NumberComponent(props) {
  return (
    <div class="flex flex-col   border bg-gray-50 rounded-xl py-8 px-10 shadow-sm shadow-gray-200 relative">
      <div class="mb-2 text-3xl md:text-4xl font-extrabold text-gray-900">
        {props.number}
      </div>
      <div class="text-gray-600 font-medium"> {props.type}</div>
      <div className="absolute  shadow-md rounded-2xl border-white -top-14 right-6 h-20 w-20 -rotate-6 bg-green-500">
        <ArrowOutwardRoundedIcon
          fontSize="large"
          sx={{ width: "100%", height: "100%" }}
          className="text-white border-4 rounded-2xl shadow-sm shadow-white"
        />
      </div>
    </div>
  );
}
