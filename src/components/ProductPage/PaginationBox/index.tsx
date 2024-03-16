"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Pagination from "@/components/Pagination";
import { addParamsUrl } from "@/utils/helper";

const PaginationBox = ({ pageCount }: { pageCount: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Pagination
      pageCount={pageCount}
      forcePage={Number(searchParams.get("page")) - 1}
      onPageChange={selectedItem => {
        router.replace(
          `${pathname}?${addParamsUrl(searchParams.toString(), {
            page: (selectedItem + 1).toString(),
          })}`,
          {
            scroll: false,
          }
        );
      }}
    />
  );
};

export default PaginationBox;
