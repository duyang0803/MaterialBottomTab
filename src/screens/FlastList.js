import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
const status = {active: 'checksquareo', inactive: 'closecircleo'};
const gender = {male: 'man', female: 'woman'};
import {AuthContext} from './util';
const FlastList = () => {
  const [users, setUser] = useState([]);
  const {signOut} = React.useContext(AuthContext);
//   function NVG (){
//   const [users, setUsers] = useState([]);
//   function Data(props) {
//     // return props;
//     return {
//       id: props.id,
//       name: props.name,
//       email: props.email,
//       gender: props.gender,
//       status: props.status,
//       n: props.gender == 'male' ? 'man' : 'woman',
//       m: props.status == 'active' ? 'checksquareo' : 'closecircleo',
//     };
//   }
//   var DATA = users.map(Data);


  useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then(res => res.json())
      .then(user => {
        // console.log(user);
        // setUser(user.map(Data));
        setUser(user);
      });
  }, []);

  // useEffect(() => {
  //   const endpoint = 'https://countries.trevorblades.com/graphql';
  //   const headers = {
  //     'content-type': 'application/json',
  //   };
  //   const graphqlQuery = {
  //     query: `query{
  //       country(code:"BR"){
  //         code
  //         native
  //       }
  //     }`,
  //     variables: {},
  //   };

  //   const options = {
  //     method: 'POST',
  //     headers: headers,
  //     body: JSON.stringify(graphqlQuery),
  //   };
  //   fetch(endpoint, options)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //     });
  // }, []);

  function oneUser({item}) {
    return (
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="idcard" size={30} />
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="user" size={30} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name="mail" size={30} />
          <Text style={styles.text}>{item.email}</Text>
        </View>

        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={gender[item.gender]} size={30} />
          <Text style={styles.text}>{item.gender}</Text>
        </View>
        <View style={styles.userContainer}>
          <Icons style={styles.icon} name={status[item.status]} size={30} />
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
    );
  }
  const headerComponent = () => {
    return <Text style={styles.conten}>User</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={users}
        renderItem={oneUser}
        ListEmptyComponent={<Text>Danh sách rỗng</Text>}
      />
      <Button title="Sign out" onPress={signOut} />
      {/* <Icon name="rocket" size={30} color="#900" />; */}
    </SafeAreaView>
  );
};

export default FlastList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    marginTop: 20,
  },
  text: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    color: '#ffefd5',
  },
  icon: {
    marginLeft: 5,
    marginVertical: 2,
    color: '#ff6347',
  },
  conten: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
    color: '#ffa07a',
  },
});