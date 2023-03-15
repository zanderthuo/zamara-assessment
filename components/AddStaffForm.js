import React, { useState, useEffect } from 'react'
import { Alert, Button, View, Text, TouchOpacity } from 'react-native'
import { Form, FormItem } from 'react-native-form-component';
import axios from 'axios';
import sendEmailNotification from '../Mailer'

const AddStaffForm = () => {
  const [Staff_Number, setStaff_Number] = useState('')
  const [Staff_Name, setStaff_Name] = useState('')
  const [Staff_Email, setStaff_Email] = useState('')
  const [Department, setDepartment] = useState('')
  const [Salary, setSalary] = useState('')

  const createStaff = async () => {
    try {
      const formData = {
        Staff_Number,
        Staff_Name,
        Staff_Email,
        Department,
        Salary,
      };
  
      await axios.post(
        'https://crudcrud.com/api/090ca2fb2cc34509a7787bf3d2b59e9f/zamara',
        formData
      );
  
      setStaff_Number('');
      setStaff_Name('');
      setStaff_Email('');
      setDepartment('');
      setSalary('');
  
      Alert.alert('New Staff created Successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onButtonPress={createStaff}>
        <FormItem
          label="Staff_Number"
          isRequired
          value={Staff_Number}
          onChangeText={(Staff_Number) => setStaff_Number(Staff_Number)}
          asterik
        />
        <FormItem
          label="Staff_Name"
          isRequired
          value={Staff_Name}
          onChangeText={(Staff_Name) => setStaff_Name(Staff_Name)}
          asterik
        />
        <FormItem
          label="Staff_Email"
          isRequired
          value={Staff_Email}
          onChangeText={(Staff_Email) => setStaff_Email(Staff_Email)}
          asterik
        />
        <FormItem
          label="Department"
          isRequired
          value={Department}
          onChangeText={(Department) => setDepartment(Department)}
          asterik
        />
        <FormItem
          label="Salary"
          isRequired
          value={setSalary}
          onChangeText={(Salary) => setSalary(Salary)}
          asterik
        />
      </Form>
    </>
  )
}

export default AddStaffForm
