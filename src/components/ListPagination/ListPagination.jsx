import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./ListPagination.css";

export default function ListPagination({ totalPages }) {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={totalPages} shape="rounded" color="primary" />
      </Stack>
    </div>
  );
}
