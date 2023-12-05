import { useState } from "react"




function App() {
  const [color, setColor] = useState("#dadada")
  let [cursor, setCursor] = useState()

  return (
    <>
      <div onMouseMove={(dets) => {
        console.log(dets.pageX + 'px')
        setCursor = dets.pageX + 'px';
      }}>
        <div className=" w-5 h-5 absolute bg-white rounded-full"
          onMouseMove={dets.pageX}
        ></div>
        <div className='bg-black w-full h-screen duration-200'
          style={{ backgroundColor: color }}>
          <div className="  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="fl flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'red' }}
                onClick={() => setColor('red')}
              >Red</button>
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'blue' }}
                onClick={() => setColor('blue')}
              >Blue</button>
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'green' }}
                onClick={() => setColor('green')}
              >Green</button>
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'yellow' }}
                onClick={() => setColor('yellow')}
              >Yellow</button>
              <button className=" outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'Black' }}
                onClick={() => setColor('Black')}
              >Black</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
