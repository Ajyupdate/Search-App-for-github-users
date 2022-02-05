import { useState } from 'react';

const Workings = () => {
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [userInput, setUserInput] = useState('');
    const [userImg, setUserImg] = useState('')
    const [userName, setUserName] = useState('UserName');
    const [dateJoined, setDateJoined] = useState('dateJoined');
    const [loginName, setLoginName] = useState('loginName');
    const [bio, setBio] = useState('setBio');
    const [repoNumber, setrepoNumber] = useState('0');
    const [followersNumber, setFollowersNumber] = useState('0');
    const [followingNumber, setFollwingNumber] = useState(0);
    const [location, setLocation] = useState('location');
    const [twitterUsername, setTwitterUsername] = useState("Twitter")
    const [blog, setBlog] = useState('blog');
    const [company, setCompany] = useState('null')

    
    const handleSubmit = (e) =>{
       
        e.preventDefault();
          fetch(`https://api.github.com/users/${userInput}`)
            .then(res=>{
                console.log(res)
                if(!res.ok){
                    throw Error("Could not fetch resource")
                }
                return res.json()
            })
            .then(data =>{
                
                
                setUserName(data.name);
                setUserImg(data.avatar_url)
                setDateJoined(data.created_at)
                setLoginName(data.login)
                setBio(data.bio)
                setrepoNumber(data.public_repos)
                setFollowersNumber(data.followers)
                setFollwingNumber(data.following)
                setLocation(data.location)
                setTwitterUsername(data.twitter_username)
                setBlog(data.blog)
                
                setIsPending(false)
                
                setError(null)
                console.log(data.company)
                if(data.company === null){
                    setCompany('not available')
                }
                else(setCompany(data.company))
               
    
                
            })
            .catch(err =>{
                setIsPending(null)
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
                    <input type="search" onChange={e => setUserInput(e.target.value)}/>
                    {/* <button type="submit" className="" >Search</button> */}
                </div>
                </form>
                
                <div className='' >
                    <div className='second-box'>
                        <div className="first-row">
                            <div><img src={userImg} alt='user pic'/></div>

                            <div className="user-details">
                                <div className='first-right-column'>
                                    <div><h5 className='username'>{userName}</h5></div>
                                    <div className='date-joined'><h5>{dateJoined}</h5></div><br/>
                                </div>

                                <div><h6 className='login-name'>{loginName}</h6></div>
                                <div> <p>{bio}</p></div>
                                
                                <div className='number-div'>
                                    <div className='numbers-header'>
                                        <p>Repos</p>
                                        <p>Followers</p>
                                        <p>Following</p>
                                    </div>
                                    <div className='number'>
                                        <p className='repo-number'>{repoNumber}</p>
                                        <p className='followers-number'>{followersNumber}</p>
                                        <p className='following-number'>{followingNumber}</p>
                                    </div>
                                </div>
                                <div className='last-div'>
                                    <p><i className="fa fa-map-marker"></i> {location}</p>
                                    <p><i className="fab fa-twitter"></i> {twitterUsername}</p>
                                    <p><i className="fas fa-blog"></i> {blog}</p>
                                    <p><i className="fa fa-industry" aria-hidden="true"></i> {company}</p>
                                    <p></p>
                                </div>

                                {/* <div className='first-last-flex'>
                                    <p ><i className="fa fa-map-marker" aria-hidden="true"></i> &ensp; {location}</p>
                                    <p className='left-flex'><i className="fab fa-twitter"></i> &ensp; {twitterUsername}</p>
                                </div>
                                <div className='last-flex'>
                                    <p><i className="fas fa-blog"></i> &ensp; {blog}</p>
                                    <p className='left-flex'><i className="fas fa-blog"></i> &ensp; {id}</p>
                                </div> */}


                            </div>
                            
                        </div>

                        
                    </div>
                </div>
                
            </div>
            

        </div>
     );
}
 
export default Workings;