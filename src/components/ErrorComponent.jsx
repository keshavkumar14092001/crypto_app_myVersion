import React from 'react'

const ErrorComponent = ({ message }) => {
    return (
        <div role="alert" className='max-w-7xl mx-auto h-[85vh] flex flex-col justify-center p-4'>
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Sorry
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Error in fetching the response from API.</p>
                <p>We are working on it.</p>
            </div>
        </div>
    )
}

export default ErrorComponent;