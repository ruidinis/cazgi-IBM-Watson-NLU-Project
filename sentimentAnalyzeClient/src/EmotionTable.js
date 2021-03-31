import React from 'react';
import './bootstrap.min.css';

export default class EmotionTable extends React.Component {

    constructor(props){
        super(props);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        }
        
        getKeys = function(){
            return Object.keys(this.props.data)
        }
        

        getRowsData = function(){
            var items = this.props.data;
            var keys = this.getKeys();
            console.log('items:',items);
            return keys.map((key)=>{
                // For each Key return emotion and emotion value
                if(items.label === "positive") {
                    return <tr><td style={{color: "green"}}> {key} </td> <td style={{color: "green"}} >{items[key]} </td></tr>
                } else if (items.label === "negative"){
                    return <tr><td style={{color: "red"}}> {key} </td> <td style={{color: "red"}} >{items[key]} </td></tr>
                } else if (items.label) {
                    return <tr><td style={{color: "orange"}}> {key} </td> <td style={{color: "orange"}} >{items[key]} </td></tr>
                } else {
                    return <tr><td style={{color: "black"}}> {key} </td> <td style={{color: "black"}} >{items[key]} </td></tr>
                    //{sadness: 0.01551, joy: 0.837086, fear: 0.008408, disgust: 0.009707, anger: 0.013984}
                }

                
            })
        }

    render() {
            return (  
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}>
            <table className="table table-bordered">
                <tbody> 
                    {this.getRowsData()}
                </tbody>
            </table>
            </div>
            );
    }
    
}