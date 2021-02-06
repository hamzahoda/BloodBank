

import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Container, Header, Content, Form, Item, Input, Label, Picker,Button, Text } from 'native-base';
import database from '@react-native-firebase/database';


class FloatingLabelExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "0",
          name:"",
          age:"",
          address:"",
          current_user:""
        };
      }
      onValueChange = (value: string) =>{
        this.setState({
          selected: value
        });
      }


      componentDidMount(){
        this.setState({current_user:this.props.current_user,name:this.props.current_user.name})
      }


      personaldata = () =>{
            let createuser = {
              name: this.state.name,
              email: this.state.current_user.email,
              profile: this.state.current_user.profile,
              uid: this.state.current_user.uid,
              age:this.state.age,
              address:this.state.address,
              bloodgroup:this.state.selected,
              contact:this.state.contact
      }

      database().ref("/").child(`personalinformation/${this.state.current_user.uid}`).set(createuser).then(()=>{
        this.props.navigation.replace("Home")
        alert("Data Update Successful")
        
      }).catch(function(error) {
          // Handle Errors here.
          console.log(error)
      });
  
      }



  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input  
              onChangeText={text => this.setState({name:text})}
              value={this.state.name}
              />
            </Item>
            <Item floatingLabel>
              <Label>Age</Label>
              <Input 
              onChangeText={text => this.setState({age:text})}
              value={this.state.age}
              />
   
            </Item>
            <Item floatingLabel>
              <Label>Contact Number</Label>
              <Input 
              onChangeText={text => this.setState({contact:text})}
              value={this.state.contact}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Address</Label>
              <Input 
              onChangeText={text => this.setState({address:text})}
              value={this.state.address}
              />
            </Item>
            <Label style={{margin:18}}>Blood Group</Label>
            {/* <Item> */}
            <Picker
              note
              mode="dropdown"
              // style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Select Blood Group" value="0" />
              <Picker.Item label="A" value="A" />
              <Picker.Item label="B" value="B" />
              <Picker.Item label="AB" value="AB" />
              <Picker.Item label="O" value="O" />
            </Picker>
            {/* </Item> */}
            <Button onPress={() => this.personaldata()} disabled={this.state.selected !== "0" && this.state.name !=="" && this.state.age !== "" && this.state.address !== ""
            ?false:true} style={{marginTop:30}} block>
            <Text>Proceed</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps=(state) => ({
  current_user:state.current_user
})

const mapDispatchToProps=(dispatch) => ({
   get_users:() => dispatch(get_users()),
   
   //parameter mei dena lazmi hai warna undefined 
   set_current_user:(create_user) => dispatch(set_current_user(create_user))
})


export default connect(mapStateToProps,mapDispatchToProps)(FloatingLabelExample)


  