import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    specialization: '',
    degree: '',
    description: '',
    experience: '',
    profilePic: null,
    phone: '',
    street: '',
    locality: '',
    city: '',
    state: '',
    pinCode: '',
    dob: '',
    sex: '',
    uid: ''
  });

  const initialFormData = {
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    name: '',
    specialization: '',
    degree: '',
    description: '',
    experience: '',
    street: '',
    locality: '',
    city: '',
    state: '',
    pinCode: '',
    profilePic: null,
    dob: '',
    sex: '',
    uid: ''
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://api.nillq.com/register/doctor', formDataToSend);
      if (response.status === 201) {
        alert('Registration successful! Awaiting approval');
        setFormData(initialFormData);  // Reset the form data
        navigate('/register/doctor');
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error('There was an error registering the doctor!', error);
      alert('Error registering doctor. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Doctor Registration</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">
                Specialization
              </label>
              <input
                id="specialization"
                name="specialization"
                type="text"
                required
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="Enter your specialization"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <input
                id="degree"
                name="degree"
                type="text"
                required
                value={formData.degree}
                onChange={handleInputChange}
                placeholder="Enter your degrees, e.g., MBBS, MD (Cardiology)"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of your expertise and practice"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Experience (in years)
              </label>
              <input
                id="experience"
                name="experience"
                type="number"
                required
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Enter your experience in years"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                value={formData.dob}
                onChange={handleInputChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                Sex
              </label>
              <select
                id="sex"
                name="sex"
                required
                value={formData.sex}
                onChange={handleInputChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="" disabled>Select your sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="uid" className="block text-sm font-medium text-gray-700">
                UID
              </label>
              <input
                id="uid"
                name="uid"
                type="text"
                required
                value={formData.uid}
                onChange={handleInputChange}
                placeholder="Enter your UID"
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                id="profilePic"
                name="profilePic"
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                  Street
                </label>
                <input
                  id="street"
                  name="street"
                  type="text"
                  required
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder="Enter your street"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="locality" className="block text-sm font-medium text-gray-700">
                  Locality
                </label>
                <input
                  id="locality"
                  name="locality"
                  type="text"
                  required
                  value={formData.locality}
                  onChange={handleInputChange}
                  placeholder="Enter your locality"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter your state"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
                  Pin Code
                </label>
                <input
                  id="pinCode"
                  name="pinCode"
                  type="text"
                  required
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  placeholder="Enter your pin code"
                  className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm;
