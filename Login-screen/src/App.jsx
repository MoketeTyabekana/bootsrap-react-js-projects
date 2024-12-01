import './App.css';

function App() {

  return (
    <div>
      <form action="">
        <label htmlFor="name">Username</label>
        <input type="text" name='username' />

        <label htmlFor="password">Password</label>
        <input type="password" name='password'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
