import React from "react"

export default class ContactCard extends React.Component{
    
    state = {
        loading:true,
        person:null
    }
    
    //loading ekranı
    async componentDidMount(){
            const url = "https://api.randomuser.me/";
            const response = await fetch(url); //bitirmesimi bekliyor
            const data = await response.json();
            this.setState({person: data.results[0], loading:false})
            
    }
    
    render(){
        return <div>{this.state.loading || !this.state.person ?(    <div>loading...</div> 
             ): (
           <div>
             <div className="title">{this.state.person.name.title}</div>
             <div className="first">{this.state.person.name.first}</div>
             <div className="last">{this.state.person.name.last}</div>             
             <img src={this.state.person.picture.large}/>
           </div>)}
       </div>
    }
}