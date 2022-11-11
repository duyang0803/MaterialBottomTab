import {
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    SafeAreaView, 
    TextInput, 
    Button,
    TouchableNativeFeedback
   } from "react-native";
  import React from "react";
  import {AuthContext} from './AuC';
  
  const SignUp = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [addess, setAddress] = useState('');
    const [states, setStates] = useState('');
    const [phones, setPhones] = useState('');
    const {signIn} = React.useContext(AuthContext);
  
     return (
       <ScrollView style={styles.main}>
         <SafeAreaView style={styles.l}>
         <View style={styles.top}>
          <Text style={styles.texttop}>Sign up</Text>
        </View>
         <View style={styles.container}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.text}>Your password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
   
           <View style={styles.center}>
             <View>
               <Text style={styles.textcenter}>Address</Text>
               <TextInput
              style={styles.input}
              placeholderTextColor={'#a9a9a9'}
              placeholder="123 Street Rd"
              value={addess}
              onChangeText={setAddress}
              keyboardType="default"
            />
            </View>
            <View style={{ marginTop: 30 }}>
               <Text style={styles.textcenter}>State</Text>
               <TextInput
                  style={styles.input}
                  placeholderTextColor={'#a9a9a9'}
                  placeholder="Victoria"
                  value={states}
                  onChangeText={setStates}
              />
            </View>
            <View style={{ marginTop: 30 }}>
               <Text style={styles.textcenter}>Your phone number</Text>
               <TextInput
                 style={styles.input}
                 placeholderTextColor={'#a9a9a9'}
                 placeholder="+61 1234567890"
                 value={phones}
                 onChangeText={setPhones}
                 keyboardType="number-pad"
               />
              <View style={styles.midTouable}>
                <TouchableNativeFeedback
                    style={styles.touchable}
                    onPress={() => signIn({addess, states, phones})}>
                  <Text style={styles.textRegister}>Register</Text>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.bottom}></View>
            </View>  
            </View>        
         </SafeAreaView>
       </ScrollView>
     );
   };
   
   export default SignUp;
   const styles = StyleSheet.create({
     main: {
       flex: 1,
       backgroundColor: "#000000",
       width: "100%",
     },
     top: {
       backgroundColor: "#ff6347",
       height: 50,
       alignItems: "center",
       justifyContent: "center",
     },
     midTouable: {
       marginTop: 10,
       alignItems: 'center',
     },
    
     texttop: {
       textAlign: "center",
       paddingVertical: 10,
       fontSize: 20,
       backgroundColor: "#ff6347",
       color: "#ffffff",
     },
     center: {
       display: "flex",
       justifyContent: "center",
       width: "100%",
       height: 700,
     },
     input: {
       marginTop: 10,
       borderWidth: 1,
       borderColor: "#ff6347",
       marginHorizontal: 20,
       paddingHorizontal: 20,
       height: 50,
     },
   
     textbottom: {
       marginTop: 20,
       textAlign: "center",
       textDecorationLine: "underline",
     },
     textcenter: {
       marginLeft: 20,
       color: "#a9a9a9",
     },
     l: {
       flex: 1,
       display: "flex",
     },
     touchable: { 
      flex: 0.5, 
      borderColor: "black", 
      borderWidth: 1 
    },
    textRegister: {
      textAlign: 'center',
      fontSize: 20,
    },
     
   });