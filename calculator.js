import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      btn1:"1",
      btn2:"2",
      btn3:"3",
      btn4:"4",
      btn5:"5",
      btn6:"6",
      btn7:"7",
      btn8:"8",
      btn9:"9",
      btn0:"0",
      out:"",
      tmp:"",
      tmp2:"",
      ans:"",
      oper:"",
      tmp3:""




    }
  }
  onePress(){
    this.setState({out:this.state.out+"1"})
    this.setState({tmp:this.state.tmp+"1"})
  }
  twoPress(){
    this.setState({out:this.state.out+"2"})
    this.setState({tmp:this.state.tmp+"2"})
  }
  thPress(){
    this.setState({out:this.state.out+"3"})
    this.setState({tmp:this.state.tmp+"3"})
  }
  foPress(){
    this.setState({out:this.state.out+"4"})
    this.setState({tmp:this.state.tmp+"4"})

  }
  fiPress(){
    this.setState({out:this.state.out+"5"})
    this.setState({tmp:this.state.tmp+"5"})
  }
  siPress(){
    this.setState({out:this.state.out+"6"})
    this.setState({tmp:this.state.tmp+"6"})
  }
  sePress(){
    this.setState({out:this.state.out+"7"})
    this.setState({tmp:this.state.tmp+"7"})
  }
  ePress(){
    this.setState({out:this.state.out+"8"})
    this.setState({tmp:this.state.tmp+"8"})
  }
  nPress(){
    this.setState({out:this.state.out+"9"})
    this.setState({tmp:this.state.tmp+"9"})
  }
  zePress(){
    this.setState({out:this.state.out+"0"})
    this.setState({tmp:this.state.tmp+"0"})
  }
  poPress(){
    this.setState({out:this.state.out+"."})
    this.setState({tmp:this.state.tmp+"."})
  }

  acPress(){
    this.setState({out:""})
    this.setState({tmp:""})
    this.setState({tmp2:""})
    this.setState({ans:""})
    this.setState({oper:""})
  }
  plus(){
    this.setState({oper:"+"});
    this.setState({tmp2:this.state.tmp})

    this.setState({out:""})
    this.setState({tmp:""})

    //var sol:0;
    /*if (this.state.tmp == 0){
      this.setState({tmp:Number(this.state.out)})
      this.setState({out:" "})

    }
    //if(this.state.tmp !=0){
      //this.setState({tmp2:Number(this.state.out)})
      //sol=this.state.t
      //this.setState({out:(this.state.tmp)+(this.state.tmp2)})
      //this.setState({out:(this.state.tmp)})
      //this.setState({out:this.state.ans})
      //this.setState({tmp:0})
     // this.setState({tmp2:0})

      //this.setState({out:this.state.ans})

    }
    */


  }
  minus(){
    this.setState({oper:"-"});
    this.setState({tmp2:this.state.tmp})

    this.setState({out:""})
    this.setState({tmp:""})

  }
  mul(){
     this.setState({oper:"*"});
    this.setState({tmp2:this.state.tmp})

    this.setState({out:""})
    this.setState({tmp:""})

  }
  divi(){
     this.setState({oper:"/"});
    this.setState({tmp2:this.state.tmp})

    this.setState({out:""})
    this.setState({tmp:""})

  }
  el(){

    switch (this.state.oper){
      case "+":
        if(this.state.ans == "") {
          this.setState({out:Number(this.state.tmp2)+Number(this.state.tmp)});
          this.setState({tmp3:this.state.tmp});
          this.setState({ans:this.state.out});
        }
        else{
          this.setState({out:Number(this.state.tmp3)+Number(this.state.out)});
          //this.setState({out:this.state.ans});
        }

        break;
      case "-":
          if(this.state.ans == "") {
          this.setState({out:Number(this.state.tmp2)-Number(this.state.tmp)});
          this.setState({tmp3:this.state.tmp});
          this.setState({ans:this.state.out});
        }
        else{
          this.setState({out:Number(this.state.tmp3)-Number(this.state.out)});
          //this.setState({out:this.state.ans});
        }
        break;
      case "*":
          if(this.state.ans == "") {
          this.setState({out:Number(this.state.tmp2)*Number(this.state.tmp)});
          this.setState({tmp3:this.state.tmp});
          this.setState({ans:this.state.out});
        }
        else{
          this.setState({out:Number(this.state.tmp3)*Number(this.state.out)});
          //this.setState({out:this.state.ans});
        }
        break;
      case "/":
          if(this.state.ans == "") {
          this.setState({out:Number(this.state.tmp2)/Number(this.state.tmp)});
          this.setState({tmp3:this.state.tmp});
          this.setState({ans:this.state.out});
        }
        else{
          this.setState({out:Number(this.state.tmp3)/Number(this.state.out)});
          //this.setState({out:this.state.ans});
        }
        break;


    }


  }
  render() {
    return (
     <LinearGradient colors ={['#000000','#000000']} style={{flex:1}}>
    <View style={{flex: 1}} >
    <View style={{flex: 1}} />

    <View style={{flex: 1 ,backgroundColor:'#000000'}} ><Text style={{color:'#ffffff',fontSize:50,textAlign:'right',}}>{this.state.out}</Text></View>


       <View style ={{flex :1 ,flexDirection:'row',justifyContent:'center'}}>

      <TouchableOpacity style={styles.btn6} onPress={()=>this.acPress()}><Text style={styles.txt2}>AC</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn6}><Text style={styles.txt2}>   +/-  </Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn6}><Text style={styles.txt2}>%</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn5} onPress={()=>this.divi()} ><Text style={styles.txt}> ÷ </Text></TouchableOpacity>

     </View>
       <View style ={{flex :1 ,flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.sePress()}><Text style={styles.txt}> 7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.ePress()}><Text style={styles.txt}>8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.nPress()}><Text style={styles.txt}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn5} onPress={()=>this.mul()}><Text style={styles.txt}> x</Text></TouchableOpacity>

     </View>
       <View style ={{flex :1 ,flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.foPress()}><Text style={styles.txt} >4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.fiPress()}><Text style={styles.txt}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.siPress()}><Text style={styles.txt}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn5} onPress={()=>this.minus()}><Text style={styles.txt}>-</Text></TouchableOpacity>

     </View>
       <View style ={{flex :1 ,flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.onePress()}><Text style={styles.txt}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.twoPress()}><Text style={styles.txt}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.thPress()}><Text style={styles.txt}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn5} onPress={()=>this.plus()}><Text style={styles.txt}>+</Text></TouchableOpacity>

     </View>
       <View style ={{flex :1 ,flexDirection:'row',justifyContent:'center'}}>
      <TouchableOpacity style={styles.btn2} onPress={()=>this.zePress()}><Text style={styles.txt}>0</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn4} onPress={()=>this.poPress()}><Text style={styles.txt}>.</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn5} onPress={()=>this.el()}><Text style={styles.txt}>=</Text></TouchableOpacity>



     </View>
    </View>
    </LinearGradient>
    );
  }
}
const styles=StyleSheet.create({

  btn2:{
    flex:2,

    height:80,
    backgroundColor:'#434343',

    margin:10,
    borderRadius:100,
    borderColor:'#434343',
    borderWidth:1

  },
  btn4:{

    flex:1,
    height:80,
    backgroundColor:'#434343',
    margin:10,
    borderRadius:100,
    borderColor:'#434343',
    borderWidth:1
  },
  btn5:{
    flex:1,
    height:80,
    backgroundColor:'#f7b733',
    margin:10,
    borderRadius:100,
    borderColor:'#f7b733',
    borderWidth:1
  },
  btn6:{
    flex:1,
    height:80,
    backgroundColor:'#DDDDDD',
    margin:10,
    borderRadius:100,
    borderColor:'#DDDDDD',
    borderWidth:1
  },
  txt:{
    flex:1,

    fontSize:50,
    textAlign:'center',
    color:'#ffffff'
  },
  txt2:{
    flex:1,
    alignItems: 'center',
    fontSize:30,
    textAlign:'center',
    padding: 5,
    color:'#000000'
  }
});
