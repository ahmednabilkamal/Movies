import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {Icon} from 'react-native-elements';

import {useRoute} from '@react-navigation/native';

import Style from './Style';

import {editMovies} from '../../redux/actions/moviesAction';

const EditMovieScreen = props => {
  const {
    params: {movieNames, movieDescs, movieRates, categoryType},
  } = useRoute();

  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState('');
  const [movieDesc, setMovieDesc] = useState('');
  const [movieRate, setMovieRate] = useState('');

  const onChangeMovieNameHandler = value => {
    setMovieName(value);
  };

  const onChangeMovieDescHandler = value => {
    setMovieDesc(value);
  };

  const onChangeMovieRateHandler = value => {
    setMovieRate(value);
  };

  useEffect(() => {});

  return (
    <View style={Style.view}>
      <View style={Style.container}>
        <View style={Style.inputSection}>
          <Icon style={Style.Icon} name="rowing" size={20} color="grey" />
          <TextInput
            style={Style.input}
            placeholder="Movie Name"
            keyboardType="default"
            onChangeText={onChangeMovieNameHandler}
            value={movieName}
            autoCapitalize="sentences"
          />
        </View>

        <View style={Style.inputSection}>
          <Icon style={Style.Icon} name="rowing" size={20} color="grey" />
          <TextInput
            style={Style.input}
            placeholder="Movie Rate"
            keyboardType="number-pad"
            onChangeText={onChangeMovieRateHandler}
            value={movieRate}
            multiline={true}
            autoCapitalize="sentences"
            maxLength={1}
          />
        </View>

        <View style={Style.inputSection}>
          <Icon style={Style.Icon} name="rowing" size={20} color="grey" />
          <TextInput
            style={Style.input}
            placeholder="Movie Description"
            keyboardType="default"
            onChangeText={onChangeMovieDescHandler}
            value={movieDesc}
            multiline={true}
            autoCapitalize="sentences"
          />
        </View>

        <TouchableOpacity
          style={Style.addContainer}
          onPress={() => {
            dispatch(
              editMovies(
                movieNames,
                movieName,
                movieRate,
                movieDesc,
                categoryType,
              ),
            );
          }}>
          <Text style={Style.addTitle}>Edit MOVIE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditMovieScreen;
