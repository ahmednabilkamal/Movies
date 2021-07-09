import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Style from './Style';
import {deleteMovies} from '../redux/actions/moviesAction';

import {useDispatch} from 'react-redux';
import {Rating} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

const MovieItem = props => {
  const onClick = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={Style.movieContainer}>
      <Image
        style={Style.movieImage}
        source={require('../assets/movie3.jpeg')}
        resizeMode={'cover'}
      />
      <View style={Style.movieDetails}>
        <Text style={Style.movieName} numberOfLines={1}>
          {props.itemData.item.name}
        </Text>
        <Text style={Style.movieDesc} numberOfLines={3}>
          {props.itemData.item.description}
        </Text>

        <View style={Style.footer}>
          <View style={Style.rating}>
            <Rating
              ratingCount={5}
              imageSize={20}
              startingValue={props.itemData.item.rate}
              minValue={0}
            />
          </View>

          <View style={Style.footerRight}>
            <TouchableOpacity
              onPress={() => {
                onClick.navigate('EditMovie', {
                  movieNames: props.itemData.item.name,
                  movieDescs: props.itemData.item.description,
                  movieRates: props.itemData.item.rate,
                  categoryType: props.categoryType,
                });
              }}>
              <Text style={Style.edit}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(
                  deleteMovies(props.itemData.item.name, props.categoryType),
                );
              }}>
              <Text style={Style.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieItem;
