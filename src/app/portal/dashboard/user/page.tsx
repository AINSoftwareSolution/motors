"use client";
import { CardHeader } from '@/app/component';
import React, { useEffect, useState } from 'react';
import { IoCarSportOutline,} from 'react-icons/io5';

interface User {
  _id: any;
  email: string;
  password: string; // In a real application, avoid storing passwords directly
}

const UserManagement: React.FC = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/user/register'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add user to the API
    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password, // Do not store passwords like this in a real app
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      const newUser = await response.json();
      console.log(newUser.user)
      // Update users list with the new user
      setUsers([...users, newUser.user]);
      setFormData({ email: '', password: '' }); // Clear form
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await fetch(`/api/user/register`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: id // Do not store passwords like this in a real app
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Remove user from the state
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <CardHeader title='User Details' icon={<IoCarSportOutline />}  />
      <div className="rounded bg-gray-50 dark:bg-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <input id="email" name="email" type="text" required onChange={handleInputChange} value={formData?.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password <span className="text-red-500">*</span>
              </label>
              <input id="password" name="password" required onChange={handleInputChange} value={formData.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex items-end">
              <button type="submit" className='px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm
                hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:bg-blue-300
                disabled:cursor-not-allowed w-full'>
                Add User
              </button>
            </div>
          </div>
        </form>

        <div className="rounded bg-gray-50 dark:bg-gray-700 p-6 my-2 text-lg font-bold text-gray-900 
          dark:text-white gap-x-2">
          <h3>User List</h3>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.email}
                <button onClick={() => handleDeleteUser(user._id)} style={{ marginLeft: '10px', color: 'red' }}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
   
export default UserManagement;
