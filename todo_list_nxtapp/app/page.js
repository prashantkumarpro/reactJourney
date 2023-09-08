"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (title == "" && desc == "") {
      alert(`please write title and desc`)
      return false;
    }

    setMainTask([...mainTask, { title, desc }])
    setTitle('')
    setDesc('')

  }
  let deletHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index, 1)
    setMainTask(copyTask)


  }

  let rendarTask = <h2 className=' text-center font-semibold'>No task Available</h2>
  if (mainTask.length > 0) {
    rendarTask = mainTask.map((t, index) => {

      return (
        <div key={index} className=' flex items-center justify-around mt-5 text-center'>
          <div className=' font-semibold  text-2xl '>{t.title}</div>
          <div className=' font-semibold  text-xl '>{t.desc}</div>
          <button className='px-3 py-2 bg-red-500 text-white rounded'

            onClick={() => {
              deletHandler(index)
            }}


          >Delete</button>
        </div>
      )

    })
  }



  return (
    <>
      <h1 className=' bg-black w-full  h-12 text-white text-center text-2xl pt-1 pb-1'>Prashant's Todo list</h1>
      <form onSubmit={submitHandler}>
        <input className=' px-2 py-2 m-8  rounded border-zinc-800 border'
          placeholder='enter title here'
          value={title}


          onChange={(e) => {
            setTitle(e.target.value)
          }}

        />
        <input className=' px-2 py-2 m-8  rounded border-zinc-800 border'
          placeholder='enter desc here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}

        />

        <button
          className='px-2 py-2 border rounded border-zinc-800 bg-black text-white font-bold'>Add Task</button>
      </form>

      <div className=' bg-slate-200 px-5 py-5'>
        <ul>{rendarTask}</ul>


      </div>
    </>
  )
}

export default page
