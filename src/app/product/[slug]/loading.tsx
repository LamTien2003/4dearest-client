import Spinner from "@/components/Loading/Spinner";
import { COLOR_GRAY_200 } from "@/constants/color";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: COLOR_GRAY_200,
        opacity: 0.5,
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};

export default Loading;
