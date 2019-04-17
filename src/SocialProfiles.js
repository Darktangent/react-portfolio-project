import React,{Component} from 'react'
import SOCIAL_PROFILES from './data/socialProfiles.js'



class Profile extends Component{

  render(){
    const {link, image}=this.props.profile
    return(
      <span>
        <a href={link}><img src={image} alt='social-profile' style={{width:35,height:35, margin:10}} /></a>
      </span>
    )
  }
}

class Profiles extends Component{



  render(){
    return (
      <div>
      <h4>Connect with Me!</h4>
          <div>
            {
              SOCIAL_PROFILES.map((profile)=>{
                return <Profile key={profile.id} profile={profile} />
              })
            }
          </div>
      </div>
    )
  }
}
export default Profiles
