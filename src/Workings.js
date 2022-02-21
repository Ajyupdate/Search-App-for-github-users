import { useState } from 'react';

import Input from './Input';
const Workings = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [userInput, setUserInput] = useState('');
    const [data, setData] = useState('')

    
    const handleSubmit = (e) =>{
    //    setUserInput('')
        e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                setIsPending(true)
                
                if(!res.ok){
                    throw Error("Could not get user(it either the user doesn't exist or your internet connection is bad)")
                }
                return res.json()
            })

            .then(data =>{
                setIsPending(false)
                setError(null)
                if(data){
                    setData(data)
                }

            })
            .catch(err =>{
                setIsPending(false)
                setError(err.message)
            })
            
    }
    return ( 
        <div className="workings">
            
            <div className="main-header">
                <h4>devfinder</h4>
                <h6>LIGHT <i className="fas fa-sun"></i></h6>
            </div>
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div>} 

            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <i className="fa fa-search icon"></i>
                        <input className='text-white' type="search" value={userInput} placeholder='Enter your github login handle' onChange={e => setUserInput(e.target.value)}/>
                        <button type="submit" className="" >Search</button>   
                    </div>
                </form>
                <Input data={data} handleSubmit={handleSubmit}/>
            </div>
            
            

        </div>
     );
}
 
export default Workings;