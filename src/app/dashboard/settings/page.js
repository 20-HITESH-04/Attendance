"use client"
import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="font-bold text-2xl mb-6">Settings</h2>

      {/* Profile Settings */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Profile</h3>
        <div className="flex flex-col gap-4">
          <label>
            <span className="text-sm text-gray-500">Username</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              placeholder="Enter your username"
            />
          </label>
          <label>
            <span className="text-sm text-gray-500">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary"
              placeholder="Enter your email"
            />
          </label>
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Notifications</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary" />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary" />
            <span>SMS Notifications</span>
          </label>
        </div>
      </div>

      {/* Privacy */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Privacy</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary" />
            <span>Show Profile Picture</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4 text-primary" />
            <span>Make Account Private</span>
          </label>
        </div>
      </div>

      {/* Theme */}
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Appearance</h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-4 h-4 text-primary"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span>Enable Dark Mode</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;