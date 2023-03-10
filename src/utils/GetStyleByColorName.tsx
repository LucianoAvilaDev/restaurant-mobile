export const GetStyleByColorName = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-themeMedium text-white focus:bg-themeDark hover:bg-themeLight";

    case "secondary":
      return "bg-gray-700 text-white focus:bg-black hover:bg-gray-500";

    case "default":
      return "border-gray-100 border-2 bg-black/50 text-gray-100 ";

    case "success":
      return "bg-green-600 text-white focus:bg-green-800 hover:bg-green-400";

    case "danger":
      return "bg-red-600 text-white focus:bg-red-800 hover:bg-red-500";

    case "info":
      return "bg-cyan-400 text-black focus:bg-cyan-600 hover:bg-cyan-300";

    case "warning":
      return "bg-amber-400 text-black focus:bg-amber-600 hover:bg-amber-300";

    default:
      return "bg-blue-500 text-white focus:bg-blue-700 hover:bg-blue-400";
  }
};
