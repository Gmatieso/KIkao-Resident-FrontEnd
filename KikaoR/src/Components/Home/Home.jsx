import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import './Home.css'

function Home() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                <img src="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" img-fluid/>    
        </div>
        <div className='col-md-6'>
                <h1 className="ubuntu my-4">Kikao <span className="text-primary">Residents</span> </h1>
                    <span style={{color:'White'}}>
                    <p class="fs-6 text-dark fw-bold font-monospace" > Kikao is a Resident Database for populating Resident, Employees, Employers and Land Data.
                    This Data shows the Workers, residents, business people and land owners. from the backend.
                     </p>
                    </span>
        </div>

      </div>

      <div className='row text-center my-12'>
        <h1>About Us</h1>
        <p>We as Kikao ....</p>
      </div>

    </div>
    
  )
}

export default Home;


