import { Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from 'react'
import Table from './Table'

const Form = () => {

  const [userName, setName] = useState('')
  const [records, setRecords] = useState([])

  const handleCheckIn = () => {
      if (userName.trim() === '') {
        alert('Please enter your name.')
        return
      }

      const checkInTime = new Date().toLocaleString()
      const newRecord = { userName, checkInTime }
      setRecords([...records, newRecord])
      setName('')
    };
  

  return(
    <>
      <Text style={styles.title}>Digite a sua alcunha para prosseguir:</Text>
        <TextInput style={styles.input}
          label= 'Patrulha'
          onChangeText={value => setName(value)}
          value={userName}
        />
      <Button title='Check In' onPress={handleCheckIn}/>
      <Table tableData={records}/>
    </>
  )}

  const styles = StyleSheet.create({
  title:{
    color: '#fff',
    padding: 10,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 200,
    color: '#fff',
  }
  })
export default Form