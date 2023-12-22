/* eslint-disable no-unused-vars */
import ReactPaginate from "react-paginate";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import employee_data from "./employee_data";

import MoreDropdown from "./MoreDropdown";
import './table.css'

const DataTable1 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [employeeData, setEmployeeData] = useState(employee_data);
  const [page, setPage] = useState(employee_data.length);





  const EmployeeCustomPagination = () => (


  
          
          
            <div className="flex justify-between my-10">

              <span>Showing 1 to 7 of 7 entries</span>
              <ReactPaginate
                className="flex"
                previousLabel={"Prev"}
                nextLabel={"Next"}
                forcePage={currentPage}
                onPageChange={(page) => handlePagination(page)}
                pageCount={Math.ceil(employeeData?.length / 2) || 1}
                breakLabel={"..."}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                activeClassName="page-item active text-red-500"
                pageClassName="page-item text-red-500"
                breakClassName="page-item text-red-500"
                nextLinkClassName="page-link text-red-500"
                pageLinkClassName="page-link text-red-500"
                breakLinkClassName="page-link text-red-500"
                previousLinkClassName="page-link text-red-500"
                nextClassName="page-item next-item bg-green-500"
                previousClassName="page-item prev-item"
                containerClassName={
                  "pagination mb-0 justify-content-end p-1"
                }
              />

            </div>

          
          



  );


  const handlePagination = async (page) => {
    setCurrentPage(page.selected);
    
    const thePage = page.selected + 1
    // fetchCall(thePage)
};




  // image: "assets/images/profiles/avatar-02.jpg",
  // name: "John Doe",
  // role: "Web Designer",
  // employeeId: "FT-0001",
  // email: "bernardogalaviz@example.com",
  // mobile: "9876543210",
  // joinedDate: "1 Jan 2013",
  // availableRoles: [ "Software Engineer", "Software Tester", "Frontend Developer", "UI/UX Developer"]
const invoiceColumns = [
  {
    name: "Name",
    sortable: true,
    maxWidth: "60px",
    selector: (row) => row?.name,
  },
  {
    name: "Employee ID",
    sortable: true,
    maxWidth: "150px",
    selector: (row) => row?.employeeId
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.email,
  },
  {
    name: "Mobile",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.mobile,
  },
  {
    name: "Join Date",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.joinedDate,
  },
  {
    name: "Role",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row?.invoiceStatus,
    cell: (row) => {
      return (
        <span  >
            {row?.availableRoles.lenght}
        </span>
      );
    },
  },
  {
    name: "Actions",
    allowOverflow: true,
    cell: (row, i) => {
      return (
        <div className="d-flex">

            <MoreDropdown bottom={i === employeeData.length -1}/>
         
        </div>
      );
    },
  },
];







  return (
    <div className="overflow-x-hidden max-w-full">

            <div className="overflow-x-auto">
            <DataTable
              noHeader
              pagination
              paginationServer
              data={employee_data}
              columns={invoiceColumns}
              expandOnRowClicked
              className="react-dataTable z-1 overflow-visible"
              sortIcon={<TbArrowsSort size={10} />}
              paginationComponent={EmployeeCustomPagination}
              paginationDefaultPage={currentPage + 1}
              paginationRowsPerPageOptions={[20, 40, 60, 100]}
              striped={true}
          
            />
          </div>
    </div>
  )
}

export default DataTable1
