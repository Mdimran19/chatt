import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'

const Sidebar = () => {
    const {getUsers} = useChatStore()
    const onlineUsers = [];

    useEffect(() => {
        getUsers()
    }, [getUsers])
  
  return (
    <div>


    </div>
  )
}

export default Sidebar