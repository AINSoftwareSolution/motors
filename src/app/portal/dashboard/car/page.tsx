"use client"
import { CardHeader, Loader } from '@/app/component';
import { CarFormData } from '@/app/utilis/type';
import { useEffect, useState } from 'react';
import { IoCarOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';

// Component
const CarTable = () => {
  const [cars, setCars] = useState<CarFormData[]>([]); // State to store fetched cars data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Fetch cars data from API
  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/car'); // Replace with your GET API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCars(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/car/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete car');
      }
      setCars(cars?.filter((car: any) => car?._id !== id));
    } catch (err) {
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <CardHeader title='Car Details' icon={<IoCarOutline />} button={'Add Car Details'}
        link='/portal/dashboard/car/updateCar' />
      <div className="container mx-auto py-6">
        <div className="overflow-x-auto overflow-y-auto "> {/* Added container for scroll */}
          <table className="min-w-full table-fixed bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Make</th>
                <th className="py-2 px-4 text-left border-b  text-gray-900 dark:text-white dark:border-gray-600">Model</th>
                <th className="py-2 px-4 text-left border-b  text-gray-900 dark:text-white dark:border-gray-600">Year</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Price</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white  dark:border-gray-600">Mileage</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white  dark:border-gray-600">City</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars?.map((car: CarFormData) => (
                <tr key={car._id} className="border-b dark:border-gray-600 text-gray-900 dark:text-white">
                  <td className="py-2 px-4">{car.make}</td>
                  <td className="py-2 px-4">{car.model}</td>
                  <td className="py-2 px-4">{car.year}</td>
                  <td className="py-2 px-4">{car.price}</td>
                  <td className="py-2 px-4">{car.mileage}</td>
                  <td className="py-2 px-4">{car.city}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(car?._id || '')}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CarTable;
