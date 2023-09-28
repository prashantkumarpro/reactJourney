
// import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((respance) => respance.json())
    //         .then(data => {
    //             setData(data)
    //         })


    // })
    const data = useLoaderData()


    return (
        <div className='text-center m-4  text-white bg-gray-600 p-4 text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
            <div> Blog: {data.blog}</div>
        </div>
    )
}

export default Github

export const githubInfoLoder = async () => {
    const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
    return responce.json()
}