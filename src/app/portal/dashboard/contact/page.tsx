"use client";
import React, { useState, useEffect } from "react";
import { CardHeader, Loader } from "@/app/component";
import { IoPersonOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

// Define a type for your contact data to ensure TypeScript recognizes the fields
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
}

const ContactPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
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
    if (!window.confirm("Are you sure you want to delete this contact?")) {
      return; // Cancel the deletion if the user confirms
    }
    
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }
      // Refresh contacts after deletion
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
    } finally {
      setLoading(false);
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
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">First Name</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Last Name</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Email</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Phone</th>
                <th className="py-2 px-4 text-left border-b text-gray-900 dark:text-white dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b dark:border-gray-600 text-gray-900 dark:text-white">
                  <td className="py-2 px-4">{contact.firstName}</td>
                  <td className="py-2 px-4">{contact.lastName}</td>
                  <td className="py-2 px-4">{contact.email}</td>
                  <td className="py-2 px-4">{contact.contact}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(contact.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
