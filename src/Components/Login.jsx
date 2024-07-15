import React from 'react'
import './login.css'
export const Login = () => {
  return (
    <div className="" id="login">

        <div className="row h-100">
            {/* <div className="col h-100"> */}
                <img src="./images/busimage4.jpg" className="img-fluid col"></img>
            {/* </div> */}
        
        <div className="col h-100 d-flex flex-column">
        <div id="loginform" className="w-50 h-50 border border-secondary m-auto ">
            <h1 className='text-danger text-center bg-dark'>MS TRAVELS</h1>
            <form className="p-3">
                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className='form-control' id='email'></input>
                </div>

                <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className='form-control' id="password"></input>
                </div>
                <button className="btn bg-dark text-white mx-auto d-flex loginbutton">Login</button>
            </form>
        </div>
        </div>

        </div>

    </div>
  )
}
