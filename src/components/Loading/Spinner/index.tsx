import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChakraSpinner size="lg" />
    </div>
  );
};

export default Spinner;
