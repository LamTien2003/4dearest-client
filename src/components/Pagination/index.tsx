"use client";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: number) => void;
  forcePage?: number;
}

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage,
}: PaginationProps) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      containerClassName={styles["wrapper"]}
      pageClassName={styles["page"]}
      activeClassName={styles["page--active"]}
      previousClassName={styles["prev-btn"]}
      nextClassName={styles["next-btn"]}
      disabledClassName={styles["disable-btn"]}
      breakLabel="..."
      nextLabel=">"
      onPageChange={selectedItem => onPageChange(selectedItem.selected)}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
