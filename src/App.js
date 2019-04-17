import React,{Component} from 'react'
import Projects from "./Projects"
import Profiles from "./SocialProfiles"
import me from "./assets/me.jpg"



class App extends Component{
  state={displayBio:false}
// constructor(){
//   super()
//   this.state={ displayBio: false}
//   // this.readMore=this.readMore.bind(this)
// }
// readMore=()=>{
//   this.setState({ displayBio: true})
// }
// showLess=()=>{
//   this.setState({ displayBio: false})
// }
toggleDisplayBio=()=>{
  this.setState({
    displayBio:!this.state.displayBio
  })
}
  render(){
    let bio=(
      <div>
        <p>I live in Houston, and I code everyday</p>
        <p> My favorite language is Javascript, and Iu think React.js is awesome</p>
        <p>Besides coding, I also love music and hot wings!</p>
        <button onClick={this.toggleDisplayBio}>Show Less</button>
      </div>
    )
    return (
      <div>
        <img src={me} alt='profile' className="profile"/>
        <h1>Hello</h1>
        <p>My name is Rohan. I am a Full stack web developer</p>
        <p>I'm always looking forward to working on meaningful projects!</p>
        {this.state.displayBio?bio:
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        }
        <hr />
        <Projects />
        <hr />
        <Profiles />
      </div>
    )
  }

}

export default App
