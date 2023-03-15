// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import { SoapClient } from 'react-native-soap';
import { View, Text, FlatList,RefreshControl, StyleSheet, ScrollView } from 'react-native';
// import { DataTable, IconButton, Modal, Portal, Provider } from 'react-native-paper';


// const ContinentsScreen = () => {
//   const [continentData, setContinentData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);

//   const loadContinents = async () => {
//     try {
//       const response = await axios.get('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL')
//       console.log('continents>>>',response)
//       setContinentData(response.data)
//       setLoading(false)
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       loadContinents()
//       setRefreshing(false);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     loadContinents()
//   }, []);
//   return (
//     <Provider>
//     {loading ? (<Text> loading...</Text> ) : (
//       <ScrollView
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }>
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>sISOCode</DataTable.Title>
//           <DataTable.Title>sName</DataTable.Title>
//           <DataTable.Title>sCapitalCity</DataTable.Title>
//           <DataTable.Title>sPhoneCode</DataTable.Title>
//           <DataTable.Title >sContinentCode</DataTable.Title>
//           <DataTable.Title>sCurrencyISOCode</DataTable.Title>
//           <DataTable.Title>Languages</DataTable.Title>
//         </DataTable.Header>

//         {continentData?.map((continent) => (
//           <DataTable.Row key={continent._id}>
//             <DataTable.Cell>{continent.sISOCode}</DataTable.Cell>
//             <DataTable.Cell>{continent.sName}</DataTable.Cell>
//             <DataTable.Cell>{continent.sCapitalCity}</DataTable.Cell>
//             <DataTable.Cell>{continent.sPhoneCode}</DataTable.Cell>
//             <DataTable.Cell>{continent.sContinentCode}</DataTable.Cell>
//             <DataTable.Cell>{continent.sCurrencyISOCode}</DataTable.Cell>
//             <DataTable.Cell>{continent.Languages}</DataTable.Cell>
//           </DataTable.Row>
//         ))}

//         <DataTable.Pagination
//           page={1}
//           numberOfPages={3}
//           onPageChange={page => {
//             console.log(page);
//           }}
//           label="1-2 of 6"
//         />
//       </DataTable>
//       </ScrollView>
//       )}
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   table: {
//     margin: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     marginVertical: 5,
//   },
//   cell: {
//     flex: 1,
//     borderWidth: 1,
//     padding: 10,
//     textAlign: 'center',
//   },
// });

// export default ContinentsScreen;



const ContinentsScreen = () => {
  return (
    <View>
      <Text>M</Text>
    </View>
  )
}

export default ContinentsScreen
