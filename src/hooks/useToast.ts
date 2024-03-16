import { useToast as useToastChakra } from "@chakra-ui/react";

const useToast = () => {
  const toast = useToastChakra();

  const displaySuccessToast = (title: string, description?: string) => {
    toast({
      title,
      description,
      status: "success",
      isClosable: true,
    });
  };

  const displayErrorToast = (title: string, description?: string) => {
    toast({
      title,
      description,
      status: "error",
      isClosable: true,
    });
  };

  return { displayErrorToast, displaySuccessToast };
};

export default useToast;
