import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
 
class Home extends Component{
       render(){
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:28,color:"#c80e0e",textShadowColor:"black", textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 5}}>Hi  {this.props.current_user.name}</Text>
            <TouchableOpacity activeOpacity={0.8}
             style={{
                    justifyContent:"center",
                    width: "50%",
                    height:"6%",
                    borderRadius: 20,
                    margin: 25,
                    backgroundColor: "#c80e0e",
             }} 
             onPress={() =>this.props.navigation.navigate("BloodDonor")} 
             > 
             <Text style={{fontSize:16,color:"white",textAlign:"center",justifyContent:"center"}}>Find Donor</Text> 
             </TouchableOpacity> 
             <TouchableOpacity activeOpacity={0.8}
             style={{
                    justifyContent:"center",
                    width: "50%",
                    height:"6%",
                    borderRadius: 20,
                    margin: 25,
                    backgroundColor: "#c80e0e",
             }} 
             onPress={() =>this.props.navigation.navigate("DonateBlood")} 
             > 
             <Text style={{fontSize:16,color:"white",textAlign:"center",justifyContent:"center"}}>Donate Blood</Text> 
             </TouchableOpacity> 
        </View>
}
}


const mapStateToProps=(state) => ({
       current_user:state.current_user
     })
     

export default connect(mapStateToProps,null)(Home)
