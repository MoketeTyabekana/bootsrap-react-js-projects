import './App.css';

function App() {

  return (
    <div className='form-group'>
      <form action="" >
        <h1>User Login</h1>
        <label htmlFor="name" className="col-sm-2 col-form-label col-form-label-sm">Username</label>
        <input type="text" name='username' className="form-control col-md-4" placeholder='Username' />

        <label htmlFor="password" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
        <input type="password" name='password' className="form-control col-md-4" placeholder='Password'/>
        <button type='submit' className="form-control col-md-4 btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default App
