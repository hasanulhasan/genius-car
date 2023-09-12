import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
  const { createUser } = useContext(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    form.reset();
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .then(e => console.error(e))
  }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="w-3/4 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name='name' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" name='password' className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type='submit'>Login</button>
            </div>
          </form>
          <p className='text-center'>Already have an account? <Link className='text-orange-600' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;