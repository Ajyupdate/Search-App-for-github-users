import { useState } from 'react';

import Input from './Input';
const Workings = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [userInput, setUserInput] = useState('');
    const [data, setData] = useState('')

    // const handlestyle = () =>{
    //     document.querySelector('body').style.backgroundColor = 'white';
    //     document.querySelector('body').style.color = 'black';
    //     // document.querySelector('.Workings').style.backgroundColor = 'white';
    // }
    const handleSubmit = (e) =>{
        setIsPending(true)
    //    setUserInput('')
        e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                
                
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
                <h6 >LIGHT <i className="fas fa-sun"></i></h6>
            </div>
           
            <div className='container'>
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div>} 

                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <i className="fa fa-search icon"></i>
                        <input className='text-white' type="search" value={userInput} placeholder='Enter your github login name' onChange={e => setUserInput(e.target.value)}/>
                        {/* <button type="submit" className="" >Search</button>    */}
                    </div>
                </form>
                <Input data={data} handleSubmit={handleSubmit}/>
            </div>
            
            

        </div>
     );
}
 
export default Workings;