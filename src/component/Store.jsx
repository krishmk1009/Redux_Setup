import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Store = () => {
    const dispatch = useDispatch();
    const {withdrawMoney ,depositMoney } = bindActionCreators(actionCreators, dispatch)
    return (
        <div style={{ position: "absolute", top: "50%", bottom: "50%" }}>

            <h1 >
                Deposit/WD moeney

            </h1>
            {/* without bindActionCreators */}
            {/* <button onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            <h3>Update</h3>
            <button onClick={() => { dispatch(actionCreators.depositMoney(100)) }} >+</button> */}
            <button onClick={() =>  withdrawMoney(100) }>-</button>
            <h3>Update</h3>
            <button onClick={() =>  depositMoney(100) } >+</button>
        </div>
    )
}

export default Store