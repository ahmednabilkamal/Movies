import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Icon} from 'react-native-elements';

import {useRoute} from '@react-navigation/native';

import Style from './Style';
import MovieItem from '../../components/MovieItem';

import {addMovies} from '../../redux/actions/moviesAction';

const MovieByCategoryScreens = props => {
  const {
    params: {categoryType},
  } = useRoute();
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');
  const [movieRate, setMovieRate] = useState(0);
  const [movieDesc, setMovieDesc] = useState('');
  const [movies, setMovie] = useState([]);

  const onChangeMovieNameHandler = value => {
    setMovieName(value);
  };

  const onChangeMovieRateHandler = value => {
    setMovieRate(value);
  };

  const onChangeMovieDescHandler = value => {
    setMovieDesc(value);
  };

  const data = useSelector(state => state.categories);

  useEffect(() => {
    setMovie(data.categories.find(item => item.name === categoryType));
  }, [data]);

  const renderMovieItem = itemData => {
    return <MovieItem categoryType={categoryType} itemData={itemData} />;
  };

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
            dispatch(addMovies(movieName, movieRate, movieDesc, categoryType));
          }}>
          <Text style={Style.addTitle}>ADD MOVIE</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={movies.movies}
        renderItem={renderMovieItem}
      />
    </View>
  );
};

export default MovieByCategoryScreens;
