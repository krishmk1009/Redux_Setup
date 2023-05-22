import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h1>MY store</h1>
            <button>Total Product : {amount}</button></div>
    )
}

export default Navbar