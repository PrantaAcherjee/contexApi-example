import React, { useContext} from 'react';
import { countContext } from './../../context/countContext';

const Main = () => {
const [count,setCount]=useContext(countContext)

const handleAdd=()=>{
const newCount= count+1;    
setCount(newCount)
}

const handleSub=()=>{
const newCount= count-1;
if(newCount<0){
return
} 
else{
setCount(newCount)
}   

}
    return (
        
        <div>
            <h3>we will show here main part {count}</h3>
            <button onClick={handleAdd}>Increment++</button>
            <button onClick={handleSub}>Decrement--</button>
        </div>

    );
};

export default Main;