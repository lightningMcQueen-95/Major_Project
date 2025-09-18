import React from "react";

function Login({ loginData, setLoginData, handleLogin }) {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Hostel Management</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <select
            value={loginData.type}
            onChange={(e) => setLoginData({ ...loginData, type: e.target.value })}
            className="w-full p-3 border rounded-lg"
          >
            <option value="student">Student</option>
            <option value="warden">Warden</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-3 bg-gray-100 rounded-lg text-sm text-gray-700">
          <p className="font-semibold mb-1">Demo Login:</p>
          <p> Student → <b>student / 123</b></p>
          <p> Warden → <b>warden / 123</b></p>
          <p> Admin → <b>admin / 123</b></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
