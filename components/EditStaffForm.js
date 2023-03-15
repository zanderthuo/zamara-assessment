import React, { useState, useEffect } from 'react'
import { Alert, Button, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Form, FormItem } from 'react-native-form-component';
import axios from 'axios';


const EditStaffForm = ({staff}) => {
  const [Staff_Number, setStaff_Number] = useState('')
  const [Staff_Name, setStaff_Name] = useState('')
  const [Staff_Email, setStaff_Email] = useState('')
  const [Department, setDepartment] = useState('')
  const [Salary, setSalary] = useState('')

  const navigation = useNavigation();

  // const getStaff = async () => {
  //   try {
  //     const response = await axios.get(`https://crudcrud.com/api/ee3ecf6285df4f87ba4a700facb71e57/zamara/${route.params.id}`);
  //     const { Staff_Number, Staff_Name, Staff_Email, Department, Salary } = response.data;
  //     setStaff_Number(response.data.Staff_Number);
  //     setStaff_Name(Staff_Name);
  //     setStaff_Email(Staff_Email);
  //     setDepartment(Department);
  //     setSalary(Salary);
  //   } catch (error) {
  //     console.log("error")
  //   }
  // };

  const updateStaff = async () => {}

  return (
    <>
      <View>
      <Text>Update Staff</Text>
      <TextInput placeholder="Staff Number" value={Staff_Number} onChangeText={setStaff_Number} />
      <TextInput placeholder="Staff Name" value={Staff_Name} onChangeText={setStaff_Name} />
      <TextInput placeholder="Staff Email" value={Staff_Email} onChangeText={setStaff_Email} />
      <TextInput placeholder="Department" value={Department} onChangeText={setDepartment} />
      <TextInput placeholder="Salary" value={Salary} onChangeText={setSalary} />
      <TouchableOpacity onPress={updateStaff}>
        <Text>Update Staff</Text>
      </TouchableOpacity>
      </View>
    </>
  )
}

export default EditStaffForm
