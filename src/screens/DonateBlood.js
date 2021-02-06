import React,{useEffect,useState} from 'react'
import {View,Text,Image,Linking, Platform} from 'react-native'
import {connect} from 'react-redux'
import { Container, Content, List, ListItem, Button, Icon, Spinner } from 'native-base'; 
import database from '@react-native-firebase/database';

const BloodDonor = (props)=>{

    let [personalinformation,setpersonalinformation] = useState("")
    useEffect(()=>{
           let information = []
           database().ref("/").child(`personalinformation/${props.current_user.uid}`).once('value',  (snapshot) =>{
                 information.push(snapshot.val())
                  setpersonalinformation(information)
           })
    },[])


    React.useLayoutEffect(() => {
      props.navigation.setOptions({

        headerTitle:<View style={{flexDirection:"row"}}>
          <Image style={{width:50,height:50,borderRadius:50,resizeMode:"contain",alignSelf:"center"}} source={{uri:props.current_user.profile}}/>
          <Text style={{alignSelf:"center",marginLeft:20,fontSize:15,fontWeight:'bold'}}>{props.current_user.name}</Text>
          </View>
      });
    }, [props.navigation]);


    const callnow = ()=>{
     let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:021-111-729-526`;
    }
    else {
      phoneNumber = `telprompt:021-111-729-526`;
    }
 
    Linking.openURL(phoneNumber);
  }



    return (
          <Container>
            <Content>
              {personalinformation.length>0?personalinformation.map((e,i)=>
              <List key={i}>
                <ListItem itemDivider>
                  <Text style={{fontSize:15,fontWeight:"bold"}}>Donor Information</Text>
                </ListItem>
                      <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Name:</Text>
                      </ListItem>
                      <ListItem >
                        <Text>{e.name}</Text>
                      </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Email:</Text>
                      </ListItem>
                      <ListItem >
                     <Text>{e.email}</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Donor Address:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>{e.address}</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Age:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>{e.age}</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Blood Group:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>{e.bloodgroup}</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Contact:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>{e.contact}</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Donate Blood:</Text>
                      </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Office Address:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>Head Office, A-25, Bahadurabad Chowrangi Karachi, Pakistan</Text>
                     </ListItem>
                     <ListItem itemDivider>
                        <Text style={{fontSize:15,fontWeight:"bold"}}>Contact Office:</Text>
                      </ListItem>
                      <ListItem>
                     <Text>UAN: 111-729-526</Text>
                     </ListItem>
                     <Button iconLeft block success onPress={callnow}>
                      <Icon name='person' />
                      <Text style={{paddingLeft:24,fontSize:20,color:"white"}}>Call Now</Text>
                    </Button>
                   </List>
            ):<Spinner color='blue' />}

                




            </Content>
          </Container>
        );
}



const mapStateToProps=(state) => ({
    current_user:state.current_user,
    personalinformation:state.personalinformation
 })

export default connect(mapStateToProps,null)(BloodDonor)


