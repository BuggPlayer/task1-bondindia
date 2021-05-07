import React from 'react';
import {Text, View} from 'react-native';
const Container2 = (props) => {
  console.log('pro', props.route.params.address);

  const add = props.route.params.address;
  return (
    <View>
      {add.length > 0 ? (
        add.map(item => (
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              borderWidth: 4,
              borderColor: '#20232a',
              borderRadius: 6,
              backgroundColor: '#61dafb',
            }}>
            <Text style={{fontSize: 20}}> {item}</Text>
          </View>
        ))
      ) : (
        <Text> NO Address</Text>
      )}
    </View>
  );
};

export default Container2;
