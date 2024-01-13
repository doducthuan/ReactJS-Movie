import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
const Paging = (props) => {
    return <PaginationControl
        page={props.page}
        between={4}
        total={props.total}
        limit={2}
        changePage={props.page}
        ellipsis={1}
    />
};

export default Paging;