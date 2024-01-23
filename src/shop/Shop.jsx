import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";

const showResults = "Showing 01-12 of 139 Results";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  //function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-warp justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards GridList={gridList} products={products} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
