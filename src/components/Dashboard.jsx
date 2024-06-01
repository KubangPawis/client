import React from 'react'
import LineChartComponent from '../components/chart'
import DoughnutChartComponent from '../components/pie'
import ShowModal from '../components/modal'

const Dashboard = () => {
  return (
    <section>
        <div className='flex  h-[400px] w-[1280px] mx-auto border-gray-200 shadow-md border rounded-md'>
            <div className='flex flex-col h-[350px] mx-auto px-4 text-xl mt-[20px]'>
            <h1 className='mb-8'>Total Number of Log Files</h1>
            <LineChartComponent />
            </div>
            <div className='flex flex-col h-[350px] mx-auto px-4 text-xl mt-[20px]'>
            <h1 className='mb-8s'>Number of Users Connected</h1>
            <DoughnutChartComponent />
            </div>
        </div>
        {/* <div>
        <ShowModal/>
        </div> */}
    </section>
  )
}

export default Dashboard
