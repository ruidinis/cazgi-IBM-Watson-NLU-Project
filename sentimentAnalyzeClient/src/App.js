import './bootstrap.min.css';
import './App.css';
import EmotionTable from './EmotionTable.js';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {innercomp:<textarea rows="4" cols="50" id="textinput"/>,
          mode: "text",
          sentimentOutput:[],
          sentiment:true
        }
  
  renderTextArea = ()=>{
    document.getElementById("textinput").value = "";
    if(this.state.mode === "url") {
      this.setState({innercomp:<textarea rows="4" cols="50" id="textinput"/>,
      mode: "text",
      sentimentOutput:[],
   
    })
    } 
  }

  renderTextBox = ()=>{
    document.getElementById("textinput").value = "";
    if(this.state.mode === "text") {
      this.setState({innercomp:<textarea rows="1" cols="50" id="textinput"/>,
      mode: "url",
      sentimentOutput:[],
      
    })
    }
  }

  sendForSentimentAnalysis = () => {

    let ret = "";
    let url = "";
    if(this.state.mode === "url") {
      url = url+"/url/sentiment/?url="+document.getElementById("textinput").value;
    } else {
      url = url+"/text/sentiment?text="+document.getElementById("textinput").value;
    }
    ret = axios.post(url);
    ret.then((response)=>{

      console.log(response.data)
      let listOfResults = response.data.result.sentiment.document;  
      console.log(listOfResults)
      this.setState({sentimentOutput:<EmotionTable data={listOfResults}/>});
    })
    .catch(err => {
      console.log('error:', err);
    }); 
  }
    sendForEmotionAnalysis = () => {

      let req = "";
      let url = "";
      if(this.state.mode === "url") {
        url = url+"/url/emotion/?url="+document.getElementById("textinput").value;
      } else {
        url = url+"/text/emotion/?text="+document.getElementById("textinput").value;
        console.log(url)
      }
      // response from the request to the local server
      req = axios.post(url);
        req.then((response)=>{
        console.log(response.data)
        let listOfResults = response.data.result.emotion.document.emotion;
        this.setState({sentimentOutput:<EmotionTable data={listOfResults}/>});   
      })
      .catch(err => {
        console.log('error:',err);
      }); 
        
    };

// load page
  render() {
    return (  
      <div className="App">
        <button className="btn btn-info" onClick={this.renderTextArea}>Text</button>
        <button className="btn btn-dark"  onClick={this.renderTextBox}>URL</button>
        <br/><br/>
        {this.state.innercomp}
        <br/>
        <button className="btn-primary" onClick={this.sendForSentimentAnalysis}>Analyze Sentiment</button>
        <button className="btn-primary" onClick={this.sendForEmotionAnalysis}>Analyze Emotion</button>
        <br/>
            {this.state.sentimentOutput}
      </div>
    );
    }
}

export default App;
