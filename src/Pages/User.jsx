import React from 'react';
import {Link} from 'react-router-dom';
import { FaSearch,FaPen,FaMinusCircle,FaUsers } from "react-icons/fa";

export default () => {
  return (
    <div className='main'>
  <section className="mn-tbl">
  <div className="container">
    <div className="row align-items-center mt-3 mx-0">
      <h1 className="blue-txt font-italic text-italic fst-italic fw-bold fs-2 text-uppercase">Users</h1>
      <div className="col-md-5 col-lg-6 my-2">
        <div className="d-flex gap-1 flex-wrap">
            <Link to={'/user'}>
              <button className="btn btn-primary">
                Users
              </button>
            </Link>
            <Link to={'/user-map'}>
            <button className='btn btn-outline-primary'>
            User Session
            </button>
            </Link>
        </div>
      </div>
      <div className="col-md-7 col-lg-6 my-2">
        <div className="d-sm-flex">
          <div className="border border-primary rounded-3 px-2 py-1 d-flex align-items-center flex-fill me-sm-2">
            <input type="search" className="py-1 w-100 border-0 bg-transparent blue2" placeholder="Search by Name or Email" id="search-m" />
            <label htmlFor="search-m ">
              <div  className='blue-bg py-1 px-2 rounded-1 text-light'>
              <FaSearch/>
              </div>
            </label>
          </div>
          <div className="mt-3 mt-sm-0">
            <button className="px-3 py-2 d-inline-block blue-bg w-100 text-light me-3 rounded-2 fs-6 fw-md bs-opacity text-center" data-bs-toggle="modal" data-bs-target="#user-box">
              Create User
            </button>
            {/* Modal */}
            <div className="modal fade" id="user-box" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered  modal-lg">
                <div className="modal-content rounded-5 p-3">
                  <div className="modal-header border-0 p-1 ps-4">
                    <h5 className="modal-title" id="exampleModalLabel">Create New User</h5>
                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                  </div>
                  <div className="modal-body">
                    <section className="n-user-sec bg-white d-flex flex-column mx-auto rounded-3">
                      <div className="container">
                        <div className="bor-in2">
                          {/* <h3 class="text-secondary text-uppercase fs-6">Create New User</h3> */}
                          <h2 className="text-dark text-uppercase fs-3">Create New User</h2>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">               
                            <label htmlFor="title" className="form-label fs-6 text-sec fw-bd">Full Name</label>
                            <input type="text" className="form-control shadow-none bor-in" id="title" placeholder="Full Name" />              
                          </div>
                          <div className="col-md-6"> 
                            <label htmlFor="email" className="form-label fs-6 text-sec fw-bd">Email</label>
                            <input type="email" className="form-control shadow-none bor-in" id="email" placeholder="email" />
                          </div>
                        </div>
                        <h5 className="fs-4 mt-3 text-dark">Account: <span className="fs-6 text-dark">Equity Cash Offer</span></h5>
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="status" className="form-label fs-6 text-sec fw-bd">Role</label>
                            <select className="form-select shadow-none bor-in" aria-label="Default select example">
                              <option selected>Role</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label htmlFor="pass" className="form-label fs-6 text-sec fw-bd">Password</label>
                            <input type="password" className="form-control shadow-none bor-in" id="pass" placeholder="Password" />                  
                          </div>
                          <div className="col-md-6">                   
                            <label htmlFor="c_pass" className="form-label fs-6 text-sec fw-bd">Confirm Password</label>
                            <input type="password" className="form-control shadow-none bor-in" id="c_pass" placeholder="Confirm Password" />                   
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <div className="bg-primary rounded-3 px-2 py-1 text-center">
                              <button className="btn fs-5 text-white" type="button">Save</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            {/* End Model */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ------------------------------
         table section
    ------------------------------- */}
  <section>
        <div className="table-responsive">
            <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
  </section>

    </div>
  )
}

