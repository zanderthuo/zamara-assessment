import React, { useState, useEffect } from 'react'
import { Alert, Button, View, Text, RefreshControl, ScrollView, StyleSheet } from 'react-native'
import { DataTable, IconButton, Modal, Portal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

import AddStaffForm from '../components/AddStaffForm'

const API_URL = 'https://crudcrud.com/api/ee3ecf6285df4f87ba4a700facb71e57/zamara'

const StaffScreen = () => {
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

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

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadStaffList()
      setRefreshing(false);
    }, 1000);
  }, []);

  const deleteStaff = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    Alert.alert('Staff Deleted Successfully!');
    await loadStaffList();
  };

  useEffect(() => {
    loadStaffList();
  }, []);

  return (
    <Provider>
    {loading ? (<Text> loading...</Text> ) : (
      <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <DataTable>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <AddStaffForm />
          </Modal>
        </Portal>
        <Button onPress={showModal} title='Add Staff' />
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
          <DataTable.Row key={staff._id}>
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
                  onPress={() => deleteStaff(staff._id)}
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
      </ScrollView>
      )}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StaffScreen
