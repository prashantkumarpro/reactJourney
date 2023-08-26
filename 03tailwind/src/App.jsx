import './App.css'
import Card from './componants/Card'

function App() {


  return (
    <>
     <div>
        <h1 className='text-3xl font-bold underline mb-8'>Hello, Today I've learned props and add basic tailwind css with viteReact</h1>
      </div>
      <Card productName="Jacket" add2Cart="Add to Cart" price = "550.00$"/>
      <Card add2Cart="Add to bag" img = "https://rb.gy/ujw1l" />
     



    </>
  )
}

export default App
