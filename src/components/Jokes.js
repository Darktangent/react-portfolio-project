import React, {Component} from 'react'

const Joke=props=>{
  const {setup, punchline}=props.joke
  return   <p style={{margin:20}}>{setup}<em>{punchline}</em></p>
}

class Jokes extends Component{

state={joke:{}, jokes:[]}
componentDidMount(){
  fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response=>{
        return response.json()
      }).then(json=>{
        this.setState({joke:json})
      }).catch(error=>alert(error.message))
}
fetchJokes=()=>{
  fetch('https://official-joke-api.appspot.com/random_ten').then(response=>{
    return response.json()
  }).then(json=>{
      this.setState({jokes:json})
  }).catch(error=>alert(error.message))
}
render(){
  // const {setup, punchline}=this.state.joke
  return(
    <div>

    <h2>Highlighted Joke</h2>

    <Joke joke={this.state.joke} />
    <hr />
    <h3>Want 10 new jokes?</h3>
    <button onClick={this.fetchJokes}>Click Me</button>
    {
      this.state.jokes.map(joke=>{
        const {id, setup, punchline}=joke
        return <p style={{margin:20}} key={id}>{setup} <em>{punchline}</em></p>
      })
    }
    </div>
  )
}


}
export default Jokes
