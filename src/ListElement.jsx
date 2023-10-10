import React from 'react'

function ListElement({value, index, onclick}) {
    return (
        <>
            <li key={index} id={index} className='flex justify-between my-2'>
                <div className='bg-gray-200 w-full rounded p-2'>
                {value}
                </div>               
                <button type="button" onClick={()=>onclick(index)} className='font-semibold py-2 px-4 bg-gray-800 hover:bg-rose-800 text-white rounded ml-1'>X</button>
            </li>
        </>
    )
}

export default ListElement