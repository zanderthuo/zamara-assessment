import React, {useState} from 'react'
import {View, Text, Alert} from 'react-native'
import { Form, FormItem } from 'react-native-form-component';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

const EditStaffScreen = ({ route }) => {
  const { staffDetails } = route.params;
  const [updatedStaffDetails, setUpdatedStaffDetails] = useState({});

  const navigation = useNavigation();

  const handleFormSubmit = async () => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/090ca2fb2cc34509a7787bf3d2b59e9f/zamara/${staffDetails._id}`, updatedStaffDetails);
      // Handle the success case here
      console.log('update>>>', updatedStaffDetails)
      Alert.alert('Staff Edited Successfully!');
      navigation.navigate('Staff');
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <View>
      <Form onButtonPress={handleFormSubmit}>
        <FormItem
          label="Staff_Number"
          isRequired
          value={staffDetails.Staff_Number}
          onChangeText={(text) =>
            setUpdatedStaffDetails((prevState) => ({
              ...prevState,
              Staff_Number: text,
            }))
          }
          asterik
        />
        <FormItem
          label="Staff_Name"
          isRequired
          value={staffDetails.Staff_Name}
          onChangeText={(text) =>
            setUpdatedStaffDetails((prevState) => ({
              ...prevState,
              Staff_Name: text,
            }))
          }
          asterik
        />
        <FormItem
          label="Staff_Email"
          isRequired
          value={staffDetails.Staff_Email}
          onChangeText={(text) =>
            setUpdatedStaffDetails((prevState) => ({
              ...prevState,
              Staff_Email: text,
            }))
          }
          asterik
        />
        <FormItem
          label="Department"
          isRequired
          value={staffDetails.Department}
          onChangeText={(text) =>
            setUpdatedStaffDetails((prevState) => ({
              ...prevState,
              Department: text,
            }))
          }
          asterik
        />
        <FormItem
          label="Salary"
          isRequired
          value={staffDetails.Salary}
          onChangeText={(text) =>
            setUpdatedStaffDetails((prevState) => ({
              ...prevState,
              Salary: text,
            }))
          }
          asterik
        />
      </Form>
    </View>
  )
}

export default EditStaffScreen
