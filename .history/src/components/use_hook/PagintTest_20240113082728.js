import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
const PagintTest = () => {
    const [page, setPage] = useState(1)

  return <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      setPage(page); 
      console.log(page)
    }}
    ellipsis={1}
  />
};

export default PagintTest;