import React from 'react'
import Send from '../Send.png'
export default function ImportantNotes() {
    return (
        <>

            <section className='ImportantNotes flex flex-col mt-5 p-5  overflow-auto  relative'>
                <div className='header'>
                    <h1 className='text-xl font-semibold text-center'> Write Important Notes Here</h1>
                </div>
                <div className='flex flex-col py-5 rounded-xl overflow-auto max-h-96 h-fit sticky'>
                    <div className='note bg-slate-400 justify-center mx-auto w-full h-16 rounded-full p-5 m-4'>
                        <h3>this is a heading </h3>
                    </div>
                   
                  

                </div>
                <div className='Footer fixed bottom-0  mt-5 flex'>
                    <div className='border h-20 bg-white w-full m-auto ml-5 mr-5 rounded-xl flex flex-row '>
                        <textarea className=' block overflow-hidden px-10 py-4 w-full h-20 rounded-xl text-sm  mx-auto focus:border-none focus:outline-none' data-min-rows='3' placeholder='Take A Note' autofocus></textarea>
                        <img src={Send} alt='Send Logo' className='h-12 w-12 mr-3 mt-3' />
                    </div>
                </div>
            </section>
        </>
    )
}
