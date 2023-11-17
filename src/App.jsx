import './App.css'

function App() {

  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <p>Helli World</p>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  )
}

export default App
