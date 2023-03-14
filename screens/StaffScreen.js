import React, { useState, useEffect } from 'react'
import { View, Text, TouchOpacity } from 'react-native'
import { DataTable, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

const API_URL = 'https://crudcrud.com/api/ee3ecf6285df4f87ba4a700facb71e57/zamara'

const StaffScreen = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadStaffList = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log('staff>>>',response.data)
      setStaffList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadStaffList();
  }, []);

  return (
    <View>
    {loading ? (<Text> loading...</Text> ) : (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Staff Number</DataTable.Title>
          <DataTable.Title>Staff Name</DataTable.Title>
          <DataTable.Title>Staff Email</DataTable.Title>
          <DataTable.Title>Department</DataTable.Title>
          <DataTable.Title numeric>Salary</DataTable.Title>
          <DataTable.Title>Edit</DataTable.Title>
          <DataTable.Title>Delete</DataTable.Title>
        </DataTable.Header>

        {staffList?.map((staff) => (
          <DataTable.Row key={staff.id}>
            <DataTable.Cell>{staff.Staff_Number}</DataTable.Cell>
            <DataTable.Cell>{staff.Staff_Name}</DataTable.Cell>
            <DataTable.Cell>{staff.Staff_Email}</DataTable.Cell>
            <DataTable.Cell>{staff.Department}</DataTable.Cell>
            <DataTable.Cell numeric>{staff.Salary}</DataTable.Cell>
            <DataTable.Cell>
            <IconButton 
              icon='pencil' 
              size={20} 
              color='firebrick'
              onPress={() => console.log('Edit')}
            />
            </DataTable.Cell>
            <DataTable.Cell>
                <IconButton 
                  icon='trash-can' 
                  size={20} 
                  color='red'
                  onPress={() => console.log('Delete!!!')}
                />
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
      )}
    </View>
  )
}

export default StaffScreen
