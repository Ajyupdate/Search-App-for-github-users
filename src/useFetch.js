const useFetch = () => {
    if(data.name == null){
        setUserName('Username Not Available')
   }
   else(setUserName(data.name))


    
    
    

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

    
    if(data.company === null){
        setCompany('not available')
    }
    else(setCompany(data.company))
    return ( 
        <div>
            hi
        </div>
     );
}
 
export default useFetch;