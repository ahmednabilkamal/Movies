import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import Style from './Style';

const CategoryGridTile = props => {
  console.log('props', props);
  return (
    <TouchableOpacity style={Style.gridContainer} onPress={props.navigation}>
      <Image
        source={require('../assets/movie3.jpeg')}
        style={Style.gridImage}
      />
      <Text style={Style.gridTitle} numberOfLines={1}>
        {props.name}
      </Text>
      <Text style={Style.gridDesc} numberOfLines={1}>
        {props.description}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryGridTile;
