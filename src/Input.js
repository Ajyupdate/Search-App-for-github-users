const Input = ({data, handleSubmit}) => {
    const date = new Date(data.created_at)
    const dateCreated = date.toDateString()
    

    return ( 
        <div>
            {/* <div className="main-header">
                <h4>devfinder</h4>
                <h6>LIGHT <i className="fas fa-sun"></i></h6>
            </div> */}
            <div >
                {/* <form onSubmit={handleSubmit}>
                    <div className="box">
                        <i className="fa fa-search icon"></i>
                        <input className='text-white' type="search" placeholder='Enter your github login handle' onChange={e => setUserInput(e.target.value)}/>
                        <button type="submit" className="" >Search</button> 
                    </div>
                </form> */}
                
                {data && <div className='second-box' >
                    <div className=''>
                        <div className="row first-row">
                            <div className='col-md-3 picture-div'><img src={data.avatar_url == null ? 'username not available' : data.avatar_url} alt='user pic'/></div> 

                            <div className="col-md-9 user-details">
                                <div className='first-right-column'>
                                    <div><h5 className='username'>{data.name === null ? 'username not available' : data.name}</h5></div>
                            
                                    <div className='date-joined'><h5>{data.created_at === null ? 'Not available' : dateCreated}</h5></div><br/>
                                </div>
                                

                                <div className='login-name'><h6>{data.login === null ? 'This user login is not available' : data.login}</h6></div>
                                <div> <p>{data.bio === null ? 'This user has no bio' : data.bio}</p></div>
                                
                                <div className='number-div'>
                                    <div className='numbers-header'>
                                        <p>Repos</p>
                                        <p >Followers</p>
                                        <p >Following</p>
                                    </div>
                                    <div className='number'>
                                        <p className='repo-number'>{data.public_repos === null ? 'Not available' : data.public_repos}</p>
                                        <p className='followers-number'>{data.followers === null ? 'Not available' : data.followers}</p>
                                        <p className='following-number'>{data.following === null ? 'Not available' : data.following}</p>
                                    </div>
                                </div>
                                <div className='last-div'>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'><i className="fa fa-map-marker"></i> {data.location === null ? 'Location not available' : data.location}</li>
                                        <li className='list-inline-item twitter'><i className="fab fa-twitter"></i> {data.twitter_username === null ? 'No twitter handle' : data.twitter_username}</li>
                                   
                                        <li className='list-inline-item'><i className="fas fa-blog"></i> {data.blog === "" ? 'No blog yet' : data.blog}</li>
                                        <li className='list-inline-item twitter'><i className="fa fa-industry"></i> {data.company === null ? 'Not available' : data.company}</li>
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
 
export default Input;