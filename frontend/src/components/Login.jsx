import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="w-full min-h-screen bg-white flex">
      {/* Left side - Login Form */}
      <div className="w-full md:w-[400px] h-screen p-8 flex flex-col">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <span className="text-sm">brewScout</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
          <p className="text-sm text-gray-500 mt-1">Log in to your account</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2 p-2.5 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
        >
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm text-gray-700">Continue with Google</span>
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-gray-400">or</span>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col"
        >
          <div className="space-y-5 flex-1">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Email address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 rounded-md bg-[#18181B] text-white border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2.5 rounded-md bg-[#18181B] text-white border-transparent focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full p-2.5 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              Log In
            </motion.button>

            <p className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="#" className="text-gray-900 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </motion.form>
      </div>

      {/* Right side - Background */}
      <div className="hidden md:block flex-1 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 transform rotate-[-8deg] translate-y-1/4">
          <div className="w-full h-full bg-gradient-to-r from-blue-50/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Login; 