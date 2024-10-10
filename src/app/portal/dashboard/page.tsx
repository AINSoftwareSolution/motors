"use client"
import useToken from '@/app/hooks/useToken'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoCarSportOutline } from 'react-icons/io5'

const Dashboard = () => {
  const router = useRouter()
  const token = useToken()


  // States to manage form data and errors
  const [formData, setFormData] = useState<any>({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    city: '',
    color: '',
    assembly: '',
    engineCapacity: '',
    bodyType: '',
    adsRef: '',
    features: [],
    sellerContact: '',
    images: [],
    description: '',
    transmission: '',
    fuelType: '',
    lastUpdated: ''
  });

  // Function to handle input change
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle file change for images
  // Function to handle file change for images
  const handleFileChange = async (e: any) => {
    const files: any = Array.from(e.target.files);
    const uploadedImages = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/car/uploadImage', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      uploadedImages.push(data.url); // Store the image URL returned from the API
    }

    setFormData({ ...formData, images: uploadedImages });
  };

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const featuresArray = value.split(/[\s,]+/).filter((item) => item.trim()); // Split by comma/space and filter out empty strings
    setFormData({ ...formData, features: featuresArray });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch('/api/car', {
      method: 'POST',
      // headers: {
      //   'Authorization': `Bearer ${token}`, // Pass token here
      // },
      body: JSON.stringify(formData)
    }).then((res) => console.log(res.json()))
  }

  // useEffect(() => {

  //   if (!token) {
  //     router.push('/portal/login')
  //   }
  // }, [])

  return (
    <>
      <div className="rounded bg-gray-50 dark:bg-gray-700 p-6 my-2 text-lg	font-bold flex text-gray-900 dark:text-white gap-x-2">
        <IoCarSportOutline fontWeight={900} fontSize={25} />
        <h4 className='text-gray-900 dark:text-white'>
          Add Car Details</h4>
      </div>
      <div className="rounded bg-gray-50 dark:bg-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="make" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Make <span className="text-red-500">*</span></label>
              <input id="make" name="make" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Model <span className="text-red-500">*</span></label>
              <input id="model" name="model" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Year <span className="text-red-500">*</span></label>
              <input id="year" name="year" type="number" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price <span className="text-red-500">*</span></label>
              <input id="price" name="price" type="number" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="mileage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mileage <span className="text-red-500">*</span></label>
              <input id="mileage" name="mileage" type="number" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                City <span className="text-red-500">*</span></label>
              <input id="city" name="city" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Color <span className="text-red-500">*</span></label>
              <input id="color" name="color" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="assembly" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Assembly <span className="text-red-500">*</span></label>
              <input id="assembly" name="assembly" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="engineCapacity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Engine Capacity <span className="text-red-500">*</span></label>
              <input id="engineCapacity" name="engineCapacity" type="number" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="bodyType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Body Type <span className="text-red-500">*</span></label>
              <input id="bodyType" name="bodyType" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="adsRef" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ad Reference <span className="text-red-500">*</span></label>
              <input id="adsRef" name="adsRef" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="sellerContact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Seller Contact <span className="text-red-500">*</span></label>
              <input id="sellerContact" name="sellerContact" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="lastUpdated" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Last Updated <span className="text-red-500">*</span></label>
              <input id="lastUpdated" name="lastUpdated" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="transmission" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Transmission <span className="text-red-500">*</span></label>
              <input id="transmission" name="transmission" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="fuelType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fuel Type <span className="text-red-500">*</span></label>
              <input id="fuelType" name="fuelType" type="text" required onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label htmlFor="features" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Features <span className="text-red-500">*</span></label>
            <input id="features" name="features" type="text" required onChange={handleFeaturesChange}
              placeholder="Enter features separated by comma or space"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                dark:focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Images</label>
            <input id="images"
              name="images"
              type="file"
              multiple
              onChange={handleFileChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description</label>
            <textarea id="description" name="description" onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
          </div>

          <div className="text-left">
            <button type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-blue-300 disabled:cursor-not-allowed"
            >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Dashboard