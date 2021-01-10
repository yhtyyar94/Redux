import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HooksCakeContainer() {
   const numOfCakes = useSelector(state => state.cake.numOfCakes)
   const dispatch = useDispatch()
    return (
        <div style={{border: '1px solid red'}}>
            <h2>Number of Cakes - {numOfCakes}</h2>
			<button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer