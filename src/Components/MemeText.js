import React,{Component} from 'react'

class Meme extends Component
{
    constructor()
    {
        super()
        this.state={
            uppertext:"",
            lowertext:"",
            randomimg:"",
            alldata:{}
           

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=> {
            console.log(response.data)
            const {memes}= response.data
       this.setState({alldata:memes})
        })

    }

    handleChange(event)
    {
        
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit()
    {let min=0;
        let max=99;
      let rn= Math.floor( Math.random() * (max - min) + min)
        this.setState({
            randomimg:this.state.alldata[rn].url
        })
    }

    render()
    {
        return (
           <div>
               <div id="form">
               
               <input type="text" placeholder="Top Text" name="uppertext"  onChange={this.handleChange} id="p" ></input>
               {"            "}
                 {"  "}
               <input type="text"  name="lowertext"  placeholder="Bottom Text" onChange={this.handleChange} id="p" ></input>
                <button type="submit" onClick={this.handleSubmit} id="button"> Generate New Meme</button>
                </div>


                <div id="MemeContainer">
                
  <img src={this.state.randomimg} alt="meme" name="randomimg" id="MemeImage"></img>
 
         <h1 id="UpperMemeText"> {this.state.uppertext}</h1>
         <h1 id="LowerMemeText"> {this.state.lowertext}</h1>
         </div>


           </div>
        )
    }
}

export default Meme;