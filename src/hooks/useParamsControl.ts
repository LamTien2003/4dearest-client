import { addParamsUrl } from "@/utils/helper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useParamsControl = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pushParams = (object: Object) => {
    router.replace(
      `${pathname}?${addParamsUrl(searchParams.toString(), object)}`,
      {
        scroll: false,
      }
    );
  };
  return { pushParams };
};

export default useParamsControl;
