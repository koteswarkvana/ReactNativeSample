import React, { Component, useEffect } from 'react'
import { StyleSheet, View, Text  } from 'react-native'
import d3 from 'd3';
// import fs from 'fs';
// import csv from 'data.csv'
import BarChart from './Components/BarChart'

export default class App extends Component {
  state = {
    data: ''
 }
 componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      // alert(response);
      // alert(responseJson);
       console.log(responseJson);
       this.setState({
          data: responseJson
       })
    })
    .catch((error) => {
       console.error(error);
      //  alert(error);
    });
 }
  render() {

    

    /**
    fs.readFile(data.csv, null, (err, data) => {
      if (err) {
          return alert(err);
      } else {
        alert(data);
          // var stopData = data.split('\n');
      }
    }); */

    /** var month="";
    var price=0;
    // var isFile=d3.cs
    // alert(data.csv);
    // d3.csv("data.csv", function(d) {
    
  d3.csv( "https://people.sc.fsu.edu/~jburkardt/data/csv/nile.csv", function(d) {
        alert("step 1");
      return {
        
          // month: parseDate(d.label),
          // price: Number(d.value.trim())
      };
    })
  .then(function(rows) {
  //etc...
  }); */
  alert("hi");

    /*let csvToJson = require('convert-csv-to-json');
 
    let json = csvToJson.getJsonFromCsv("./Components/data.csv");
    for(let i=0; i<json.length;i++){
        alert(json[i]);
    }*/

    /**const csvFilePath='./Components/data.csv'
    const csv=require('csvtojson')
    csv().fromFile(csvFilePath).then((jsonObj)=>{
        alert(jsonObj);
        /**
         * [
         * 	{a:"1", b:"2", c:"3"},
         * 	{a:"4", b:"5". c:"6"}
         * ]
         */ 
    // })
    

    /* const data = [
      { label: 'Jan', value: 500 },
      { label: 'Feb', value: 312 },
      { label: 'Mar', value: 424 },
      { label: 'Apr', value: 745 },
      { label: 'May', value: 89 },
      { label: 'Jun', value: 434 },
      { label: 'Jul', value: 650 },
      { label: 'Aug', value: 980 },
      { label: 'Sep', value: 123 },
      { label: 'Oct', value: 186 },
      { label: 'Nov', value: 689 },
      { label: 'Dec', value: 643 }
    ] */
    return (
      <View style={styles.container}>
        {
          <Text>
              {this.state.data.body}
          </Text>
          //  <BarChart data={data} round={100} unit="€"/> 
        }
        
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})