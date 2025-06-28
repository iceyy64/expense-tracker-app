import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const updateUser = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const clearUser = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        clearUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
