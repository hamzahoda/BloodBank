
import React,{Component} from 'react';

import {Text, View,Image} from 'react-native'
import { Container, Content, Icon, Picker, Form } from "native-base";

import {connect} from 'react-redux'

class BloodDonor extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected: "O",
          filteredusers: this.props.personalinformation
        };
      }
      onValueChange(value: string) {

        if(value === "A"){
            let filteruser = []
            this.props.personalinformation.map((e)=> e.bloodgroup ==="A" || e.bloodgroup ==="AB"?filteruser.push(e):null )
            this.setState({filteredusers:filteruser,selected:value})
        }
        else if(value === "B"){
            let filteruser = []
            this.props.personalinformation.map((e)=> e.bloodgroup ==="B" || e.bloodgroup ==="AB"?filteruser.push(e):null )
            this.setState({filteredusers:filteruser,selected:value})
        }
        else if(value === "AB"){
            let filteruser = []
            this.props.personalinformation.map((e)=> e.bloodgroup ==="AB"?filteruser.push(e):null )
            this.setState({filteredusers:filteruser,selected:value})
        }
       else if(value === "O"){
        this.setState({
          filteredusers:this.props.personalinformation,
          selected: value
        });
      }
      }
render(){
    return(
        <View style={{flex:1,backgroundColor:"red"}}>

      <Container>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Blood Group A" value="A" />
              <Picker.Item label="Blood Group B" value="B" />
              <Picker.Item label="Blood Group O" value="O" />
              <Picker.Item label="Blood Group AB" value="AB" />

            </Picker>
          </Form>
        </Content>
      </Container>

                    <View style={{flex:9,backgroundColor:"lightgrey"}}>
                    {
                    this.props.users.length>0 ? this.state.filteredusers.map((e,i)=>{
        
                        //e.uid !== this.props.current_user.uid to display user other than you
                        return e.uid !==this.props.current_user.uid && <View onStartShouldSetResponder={() => this.props.navigation.navigate("DonorDetails",{
                            current_user:this.props.current_user,
                            user:e
                        })}
        
        
                        key={i} style={{flexDirection:"row"}}>
                    <Image style={{width:50,height:50,margin:10,borderRadius:50,alignSelf:"center"}} source={{uri:e.profile}}/>
                    <View style={{alignSelf:"center"}}>
                    <Text style={{marginLeft:20,marginBottom:3,fontSize:17}}>{e.name}</Text>
                    
                    <View style={{flexDirection:"row"}}>
                        
                    <Text style={{marginLeft:20,fontSize:17,color:"#686868",alignSelf:"center"}}>Blood Group: {e.bloodgroup}</Text>
                  
                    </View>
                    
                    
                    </View>
                    </View>
                    }):null    
                
                }
                    
                    </View>
        
                </View>
    )
}
}




const mapStateToProps=(state) => ({
    users:state.users,
    current_user:state.current_user,
    personalinformation:state.personalinformation
 })

export default connect(mapStateToProps,null)(BloodDonor)


