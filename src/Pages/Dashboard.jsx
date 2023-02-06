import React from 'react';
import { FaClipboardList, FaSearchDollar,FaUsers,FaEnvelope} from "react-icons/fa";

export default () => {
  return (
    <div>
    <div className='main'>
      <section className="taskd-sec">
        <div className="container">
          <div className="row bor-in2">
            <h1 className="blue-txt fs-2 lh-base fw-semi fst-italic mt-3">Dashboard</h1>
            <div className="col-lg-11 col-xl-10">
              <form action>
                <div className="row gx-2">
                  <div className="col-md-6 col-lg-3">
                    <select className="form-select text-secondary mt-3" aria-label="Default select example">
                      <option selected>Set Period</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mt-3">
                      <input type="date" className="form-control text-secondary" id="exampleFormControlInput1" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="mt-3">
                      <input type="date" className="form-control text-secondary" id="exampleFormControlInput1" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <select className="form-select text-secondary mt-3" aria-label="Default select example">
                      <option selected className="fs-6">Disposition manager</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- Activity::a Section ----------------*/}
      <section className="activity-sec mt-3">
        <div className="container">
          <h3 className="text-secondary fs-5 lh-base">Activity:</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-primary new-d p-3 rounded-3'>
                  <FaClipboardList size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0">New Deals</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">34</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-warning new-off p-3  rounded-3'>
                <FaClipboardList size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0 ">New Offers</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">14</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-primary new-d p-3 rounded-3'>
                <FaClipboardList size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0 ">Accepted Offers</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">5</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className=" text-dark n-lead p-3 rounded-3" >
                <FaClipboardList size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0 ">New Leads</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">5</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary a-fee rounded-3 p-3'>
                <FaSearchDollar size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0 ">Assignment Fees</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-2 mb-0">5</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3 mt-3">
              <div className="bg-white rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-primary a-fee rounded-3 p-3'>
                <FaSearchDollar size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 text-secondary lh-1 mb-0 ">Average Assignment Fees</h5>
                  <p className="fs-4 text-dark mont-font lh-1 mt-1 mb-0">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- Buyers Matrics ----------------*/}
      <section className="activity-sec mt-3">
        <div className="container">
          <h3 className="text-secondary fs-6 lh-base">Buyers Matrics:</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="buyers-mat2 rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-warning n-buy p-3 rounded-3'>
                  <FaUsers size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-4 text-white lh-1 mb-0 ">100</h5>
                  <p className="fs-6 text-white lh-1 mt-2 mb-0">New Buyers</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="buyers-mat3 rounded-3 shadow p-3 d-flex align-items-center">
                <div className='blue-txt n-lost rounded-3 p-3'>
                <FaUsers size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-4 text-white lh-1 mb-0 ">100</h5>
                  <p className="fs-6 text-white lh-1 mt-2 mb-0">Buyers Lost</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="buyers-mat rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-primary net-buy p-3 rounded-3'>
                <FaUsers size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-4 text-white lh-1 mb-0 ">100</h5>
                  <p className="fs-6 text-white lh-1 mt-2 mb-0">Net Buyers Change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*---------------- Activity:: b ----------------*/}
      <section className="activity-sec mt-3">
        <div className="container">
          <h3 className="text-secondary fs-6 lh-base">Activity:</h3>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
                <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">Sent</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">34</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">Delivered</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">100%</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">opens(unique)</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">16% (12%)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">Clicks (Unique)</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">0% (0%) <sub className="text-white">4,797(3,067)</sub></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">Blocks</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">0.02% <sub className="text-white fs-6">276</sub></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
                </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase">Bounces</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">0.00% <sub className="text-white fs-6">18</sub></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3  mt-3">
              <div className="blue-bg rounded-3 shadow p-3 d-flex align-items-center">
              <div className='text-primary unique rounded-3 p-2'>
                  <FaEnvelope size={35}/>
              </div>
                <div className="ps-3">
                  <h5 className="fs-6 bg-prop1 lh-1 mb-0 text-uppercase ">Spam Reporters</h5>
                  <p className="fs-5 text-primary mont-font lh-1 mt-2 mb-0">0.01%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>

    </div>
  )
}

