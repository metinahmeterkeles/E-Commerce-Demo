import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul>
      {pageNumbers.map((number) => {
        <li key={number}>1</li>;
      })}
    </ul>
  );
};

export default Pagination;
