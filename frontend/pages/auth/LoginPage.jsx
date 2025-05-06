import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash, FaCoffee } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18, staggerChildren: 0.12 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }
};
const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
  }
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your login logic here
      console.log('Logging in with:', { email, password });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Add your Google login logic here
      console.log('Logging in with Google');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - BrewScout</title>
        <meta name="description" content="Log in to your BrewScout account to find your perfect café spot" />
      </Helmet>

      <div className="min-h-screen w-full bg-[#E8D9C5] flex items-center justify-center p-1 md:p-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-3xl bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(111,78,55,0.3)] flex flex-col md:flex-row overflow-hidden"
        >
          {/* Left side - Login Form */}
          <motion.div className="w-full md:max-w-lg p-3 md:p-6 flex flex-col relative justify-center" variants={itemVariants}>
            {/* Decorative coffee elements */}
            <motion.div className="absolute top-0 right-0 w-20 h-20 -translate-y-8 translate-x-8 opacity-5" {...floatAnim}>
              <div className="w-full h-full rounded-full border-8 border-[#6F4E37]"></div>
            </motion.div>
            <motion.div className="absolute bottom-0 left-0 w-14 h-14 translate-y-6 -translate-x-6 opacity-5" {...floatAnim}>
              <div className="w-full h-full rounded-full border-8 border-[#6F4E37]"></div>
            </motion.div>

            <motion.div className="mb-6 relative" variants={itemVariants}>
              <Link to="/" className="flex items-center gap-2 mb-4 hover:text-[#FFB347] transition-colors">
                <FaCoffee className="h-6 w-6 text-[#6F4E37]" />
                <span className="text-[#6F4E37] font-semibold">brewScout</span>
              </Link>
              <motion.h1 className="text-2xl font-bold text-[#2C2C2C]" variants={itemVariants}>Welcome back</motion.h1>
              <motion.p className="text-[#6B6B6B] mt-1 text-sm" variants={itemVariants}>Log in to your account</motion.p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 p-2.5 border border-[#6F4E37]/10 rounded-xl bg-white hover:bg-[#F5EBDD]/30 transition-colors shadow-[0_4px_12px_rgba(111,78,55,0.12)]"
              variants={itemVariants}
            >
              <FcGoogle className="w-5 h-5" />
              <span className="text-[#2C2C2C] text-sm">Continue with Google</span>
            </motion.button>

            <motion.div className="relative my-5" variants={itemVariants}>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#6F4E37]/10"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-[#6B6B6B]">or</span>
              </div>
            </motion.div>

            <motion.form
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } }
              }}
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col relative"
            >
              <motion.div className="space-y-4 flex-1" variants={itemVariants}>
                <div>
                  <label htmlFor="email" className="block text-xs text-[#2C2C2C] mb-1 font-medium">
                    Email address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.03 }}
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white text-[#2C2C2C] border border-[#6F4E37]/20 focus:outline-none focus:border-[#FFB347] transition-colors shadow-[0_4px_8px_rgba(111,78,55,0.08)] text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs text-[#2C2C2C] mb-1 font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.03 }}
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white text-[#2C2C2C] border border-[#6F4E37]/20 focus:outline-none focus:border-[#FFB347] transition-colors shadow-[0_4px_8px_rgba(111,78,55,0.08)] pr-9 text-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.85, rotate: -10 }}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors"
                    >
                      {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                    </motion.button>
                  </div>
                  <div className="flex justify-end mt-1">
                    <Link to="/forgot-password" className="text-xs text-[#6B6B6B] hover:text-[#FFB347] transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-3 mt-3" variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  type="submit"
                  className="w-full p-2.5 bg-[#FFB347] text-white rounded-xl hover:bg-[#fca835] transition-colors text-sm font-medium shadow-[0_4px_8px_rgba(255,179,71,0.18)]"
                >
                  Log In
                </motion.button>

                <p className="text-center text-[#6B6B6B] text-xs">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-[#6F4E37] hover:text-[#FFB347] transition-colors font-medium">
                    Sign up
                  </Link>
                </p>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Right side - Coffee Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
            className="hidden md:block flex-1 bg-[#E8D9C5] relative overflow-hidden min-h-[300px]"
          >
            <div className="absolute inset-0">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6F4E37]/20 to-transparent z-10"></div>
              {/* Main coffee image */}
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Aesthetic coffee shop interior"
                className="w-full h-full object-cover"
              />
              {/* Decorative elements */}
              <motion.div className="absolute inset-0 z-20 pointer-events-none" {...floatAnim}>
                <div className="absolute top-4 right-4 w-12 h-12 border-4 border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 left-4 w-8 h-8 border-4 border-white/20 rounded-full"></div>
              </motion.div>
            </div>
            {/* Content overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 60 }}
              className="absolute bottom-2 left-2 right-2 p-3 md:p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_4px_8px_rgba(111,78,55,0.10)] z-30"
            >
              <h2 className="text-xs md:text-sm font-semibold text-[#2C2C2C] mb-1">Discover Your Perfect Coffee Spot</h2>
              <p className="text-[#6B6B6B] text-xs">Join our community of coffee lovers and explore the best cafes in your area.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage; 