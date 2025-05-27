
const AuthLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full overflow-auto px-4">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 border rounded" />
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
              Sign In
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Don't have an account? <a href="/register" className="text-blue-600 underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
