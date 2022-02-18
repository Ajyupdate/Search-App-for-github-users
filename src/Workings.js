import { useState } from 'react';
import pic3 from './img/pic3.jpeg';
const Workings = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [userInput, setUserInput] = useState('');
    const [userImg, setUserImg] = useState(pic3)
    const [userName, setUserName] = useState('UserName');
    const [dateJoined, setDateJoined] = useState('dateJoined');
    const [loginName, setLoginName] = useState('loginName');
    const [bio, setBio] = useState('setBio');
    const [repoNumber, setrepoNumber] = useState('150000');
    const [followersNumber, setFollowersNumber] = useState('150000');
    const [followingNumber, setFollwingNumber] = useState('150000');
    const [location, setLocation] = useState('location');
    const [twitterUsername, setTwitterUsername] = useState("Twitter")
    const [blog, setBlog] = useState('');
    const [company, setCompany] = useState('null')
    const [data, setData] = useState('')

    
    const handleSubmit = (e) =>{
       
        e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                setIsPending(true)
                
                if(!res.ok){
                    throw Error("Could not fetch resource(it either the user doesn't exist or your internet connection is bad)")
                }
                return res.json()
            })

            .then(data =>{
                setIsPending(false)
                setError(null)
                if(data){
                    console.log('data is here')
                    setData(data)
                }

                if(data.name == null){
                    setUserName('Username Not Available')
               }
               else(setUserName(data.name))


                
                
                // setUserName(data.name);
                // if(data.name){
                //     setUserName('Not Available')
                //  }
                // else(setUserName(data.name))

                
                // (setUserImg(data.avatar_url))

                if(data.avatar_url == null){
                    setUserImg('Image not available')
               }
               else(setUserImg(data.avatar_url))

                
                   
               

                // setDateJoined(data.created_at)
                if(data.created_at === null){
                    setDateJoined('Not Available')
               }
               else(setDateJoined(data.created_at))


                // setLoginName(data.login)
                if(data.login === null){
                    setLoginName('This User login is not available')
               }
               else(setLoginName(data.login))


                // setBio(data.bio)
                if(data.bio === null){
                    setBio('This User has no bio')
               }
               else( setBio(data.bio))


                // setrepoNumber(data.public_repos)
                if(data.public_repos === null){
                    setrepoNumber('Not available')
               }
               else( setrepoNumber(data.public_repos))


                // setFollowersNumber(data.followers)
                if(data.followers === null){
                     setFollowersNumber('Not available')
                }
                else( setFollowersNumber(data.followers))



                // setFollwingNumber(data.following)
                if(data.following === null){
                    setFollwingNumber('Not available')
                }
                else(setFollwingNumber(data.following))


                // setLocation(data.location)
                if(data.location === null){
                    setLocation('Location not available')
                }
                else(setLocation(data.location))


                // setTwitterUsername(data.twitter_username)
                if(data.twitter_username === null){
                    setTwitterUsername('no twitter handdle')
                }
                else(setTwitterUsername(data.twitter_username))
                // setBlog(data.blog)
                if(data.blog === ""){
                    setBlog('No blog yet')
                }
                else(setBlog(data.blog))
            
                
                // setIsPending(false)
                // setError(null)

                
                if(data.company === null){
                    setCompany('not available')
                }
                else(setCompany(data.company))
               
            })
            .catch(err =>{
                setIsPending(false)
                setError(err.message)
            })
            
    }
    return ( 
        <div className="workings">
            {error && <div>{error}</div>} 
            {isPending && <div>Loading...</div>} 
            <div className="main-header">
                <h4>devfinder</h4>
                <h6>LIGHT <i className="fas fa-sun"></i></h6>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <i className="fa fa-search icon"></i>
                        <input className='text-white' type="search" placeholder='Enter your github login handle' onChange={e => setUserInput(e.target.value)}/>
                        <button type="submit" className="" >Search</button> 
                    </div>
                </form>
                
                {data && <div className='second-box' >
                    <div className=''>
                        <div className="row first-row">
                            <div className='col-md-3 picture-div'><img src={userImg} alt='user pic'/></div>

                            <div className="col-md-9 user-details">
                                <div className='first-right-column'>
                                    <div><h5 className='username'>{userName}</h5></div>
                                    <div className='date-joined'><h5>{dateJoined}</h5></div><br/>
                                </div>

                                <div className='login-name'><h6>{loginName}</h6></div>
                                <div> <p>{bio}</p></div>
                                
                                <div className='number-div'>
                                    <div className='numbers-header'>
                                        <p>Repos</p>
                                        <p >Followers</p>
                                        <p >Following</p>
                                    </div>
                                    <div className='number'>
                                        <p className='repo-number'>{repoNumber}</p>
                                        <p className='followers-number'>{followersNumber}</p>
                                        <p className='following-number'>{followingNumber}</p>
                                    </div>
                                </div>
                                <div className='last-div'>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'><i className="fa fa-map-marker"></i> {location}</li>
                                        <li className='list-inline-item twitter'><i className="fab fa-twitter"></i> {twitterUsername}</li>
                                    </ul>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'><i className="fas fa-blog"></i> {blog}</li>
                                        <li className='list-inline-item twitter'><i className="fa fa-industry"></i> {company}</li>
                                    </ul>
                                    
                                    

                                    
                                </div>

                            </div>
                            
                        </div>

                        
                    </div>
                </div>}
                
            </div>
            

        </div>
     );
}
 
export default Workings;