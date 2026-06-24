import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Ro'yxatdan o'tish ma'lumotlari:", data);
  };

  return (
    <div className="flex flex-col md:flex-row  max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#e3effd]">
      
      {/* Chap taraf - Illyustratsiya qismi */}
      <div className="md:w-1/2 bg-[#7faeff] flex flex-col items-center justify-center p-8 relative">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-[#5ca1fe] rounded-full flex items-center justify-center p-4">
          {/* Bu yerga rasm o'rniga multfilm qahramoni rasmini qo'yishingiz mumkin */}
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60" // Istalgan avatar rasmi
            alt="Character" 
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* O'ng taraf - Forma qismi */}
      <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Ism va Familiya (Desktopda yonma-yon) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">First Name</label>
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
                className={`w-full p-2 border rounded-md outline-none text-sm ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-400'}`}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                className={`w-full p-2 border rounded-md outline-none text-sm ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-400'}`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Please enter a valid email address",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
              })}
              className={`w-full p-2 border rounded-md outline-none text-sm ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-400'}`}
            />
            {errors.email && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.email.message}</p>}
          </div>

          {/* Telefon raqam */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Mobile Number</label>
            <input
              type="tel"
              {...register("mobileNumber", { required: "Mobile number is required" })}
              className={`w-full p-2 border rounded-md outline-none text-sm ${errors.mobileNumber ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-400'}`}
            />
            {errors.mobileNumber && <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.mobileNumber.message}</p>}
          </div>

          {/* Parol */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full p-2 border rounded-md outline-none text-sm ${errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-400'}`}
            />
          </div>

          {/* Submit Tugmasi */}
          <button
            type="submit"
            className="w-full bg-[#4ba3b5] hover:bg-[#3d8998] text-white py-2.5 px-4 rounded-md text-sm font-semibold transition-colors mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}