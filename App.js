import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

import myData from "./store/myData"
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { observer } from "mobx-react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

function App() {



  const [name, setName] = useState("")
  const [users, setUsers] = useState([])





  
  return (

    <View style={styles.container}>


      <FlatList style={{ width: "100%", borderRightColor: "yellow", marginTop: 50 }} data={myData.data} renderItem={(v, i) => {

        return (
          <View key={i} style={{ backgroundColor: "lightgray", width: "90%", height: 50, alignSelf: "center", gap: 5, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingLeft: 20, paddingRight: 20, margin: 10 }}>

            <Text>
              {v.item.name}
            </Text>

            <Text>
              <MaterialCommunityIcons onPress={() => myData.updateData(v.item.id)} name="update" color={"gray"} size={30} />
              <MaterialCommunityIcons onPress={() => myData.deleteData(v.item.id)} name="delete-outline" color={"gray"} size={30} />
            </Text>


          </View>
        )


      }} />


      {/* {myData.data?.map((v, i) =>

        <View>
          <Text key={i} style={styles.entries}>
            {v.name}
          </Text>

          <Text key={i} style={styles.entries}>
            Update
          </Text>

        </View>
      )} */}

      <TextInput
        style={styles.input}
        onChangeText={(e) => setName(e)}
        placeholder="Name"
        value={name}
        maxLength={20}
      />


      <TouchableOpacity onPress={() => { myData.addToData({ name }); setName("") }} style={styles.button}>
        <Text style={{ color: "white" }}>
          Add
        </Text>
      </TouchableOpacity>





      <TouchableOpacity onPress={() => myData.deleteAllData()} style={styles.button}>
        <Text style={{ color: "white" }}>
          Delete
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: "90%",
    height: 70,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },


  button: {
    width: "90%",
    height: 50,
    margin: 10,
    padding: 5,
    backgroundColor: "darkgreen",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },


  entries: {

    height: 40,
    width: '90%',
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"

  }


});



export default observer(App)