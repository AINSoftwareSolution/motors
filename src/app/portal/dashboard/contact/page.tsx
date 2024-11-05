"use client";
import React, { useState, useEffect } from "react";
import { CardHeader, Loader } from "@/app/component";
import { IoPersonOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ContactTypes } from "@/app/utilis/type";



const ContactPage = () => {
  const [contacts, setContacts] = useState<ContactTypes[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch contacts from the API
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact"); // Adjust to your API endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a contact by ID
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/contact`, {
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
      setContacts(contacts.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <CardHeader
        title="Contact Details"
        icon={<IoPersonOutline />}
        button="Add Contact"
        link="/portal/dashboard/contact/addContact"
      />
      <div className="container mx-auto py-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-x-auto overflow-y-auto "> {/* Added container for scroll */}

            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">First Name</th>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Last Name</th>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Email</th>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Phone</th>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Message</th>
                  <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts?.map((contact) => (
                  <tr key={contact.id} className="border-b dark:border-gray-600 text-gray-900 dark:text-white">
                    <td className="py-2 px-4">{contact.firstName}</td>
                    <td className="py-2 px-4">{contact.lastName}</td>
                    <td className="py-2 px-4">{contact.email}</td>
                    <td className="py-2 px-4">{contact.contact}</td>
                    <td className="py-2 px-4">{contact.message}</td>
                    <td className="py-2 px-4 flex space-x-4">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(contact?._id || '')}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
