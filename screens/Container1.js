import React from 'react';

import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {data} from '../assets/data';
const Container1 = (props) => {
  return (
    <View style={{margin: 10}}>
      <FlatList
        data={data}

        renderItem={({item}) => {
             return (
            <TouchableOpacity
           
              onPress={() =>
                props.navigation.navigate('container2', {address: item.address})
              }
              style={{
                padding: 10,
                flexDirection: 'row',
                borderWidth: 4,
                borderColor: '#20232a',
                borderRadius: 6,
                backgroundColor: '#61dafb',
              }}>
              <Text style={{fontSize: 20}}> Id:{item.id}</Text>
              <Text style={{fontSize: 20}}> Name:{item.name}</Text>
              <Text style={{fontSize: 20}}> Age:{item.age}</Text>
              <Text style={{fontSize: 20}}> Sex :{item.sex}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Container1;
