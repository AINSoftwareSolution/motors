"use client"
import useToken from '@/app/hooks/useToken'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter()
  const token = useToken()

  console.log(token ,!token)

  // useEffect(() => {
    
  //   if (!token) {
  //     router.push('/portal/login')
  //   }
  // }, [])

  return (
<div className="max-w-7xl mx-auto p-8">
  <div className="bg-white shadow-lg rounded-lg p-6">
    <form action="#" method="POST" className="space-y-4">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="carId" className="block text-sm font-medium text-gray-700">Car ID <span className="text-red-500">*</span></label>
          <input id="carId" name="carId" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="make" className="block text-sm font-medium text-gray-700">Make <span className="text-red-500">*</span></label>
          <input id="make" name="make" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model <span className="text-red-500">*</span></label>
          <input id="model" name="model" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year <span className="text-red-500">*</span></label>
          <input id="year" name="year" type="number" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price <span className="text-red-500">*</span></label>
          <input id="price" name="price" type="number" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">Mileage <span className="text-red-500">*</span></label>
          <input id="mileage" name="mileage" type="number" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City <span className="text-red-500">*</span></label>
          <input id="city" name="city" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color <span className="text-red-500">*</span></label>
          <input id="color" name="color" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="assembly" className="block text-sm font-medium text-gray-700">Assembly <span className="text-red-500">*</span></label>
          <input id="assembly" name="assembly" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="engineCapacity" className="block text-sm font-medium text-gray-700">Engine Capacity <span className="text-red-500">*</span></label>
          <input id="engineCapacity" name="engineCapacity" type="number" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="bodyType" className="block text-sm font-medium text-gray-700">Body Type <span className="text-red-500">*</span></label>
          <input id="bodyType" name="bodyType" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="adsRef" className="block text-sm font-medium text-gray-700">Ad Reference <span className="text-red-500">*</span></label>
          <input id="adsRef" name="adsRef" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="sellerContact" className="block text-sm font-medium text-gray-700">Seller Contact <span className="text-red-500">*</span></label>
          <input id="sellerContact" name="sellerContact" type="text" required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>
      <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
          <input id="images" name="images" type="file" multiple
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>

      <div className="text-right">
        <button type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
          >Submit</button>
      </div>
    </form>
  </div>
</div>


  )
}

export default Dashboard