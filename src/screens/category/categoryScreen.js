import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Icon} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import Style from './Style';
import CategoryGridTile from '../../components/CategoryGrid';

import {addCategory} from '../../redux/actions/categoryAction';

const CategoryScreen = props => {
  const onClick = useNavigation();
  const dispatch = useDispatch();

  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  const [categories, setCategories] = useState([]);

  const data = useSelector(state => state.categories);

  useEffect(() => {
    setCategories(data.categories);
  }, [data]);

  if (data.length === 0 || !data) {
    return (
      <View>
        <Text>No Categories found. Start add some!</Text>
      </View>
    );
  }

  const renderCategoryItem = itemData => {
    return (
      <CategoryGridTile
        name={itemData.item.name}
        description={itemData.item.description}
        navigation={() => {
          onClick.navigate('MovieByCategory', {
            categoryId: itemData.item.id,
            categoryType: itemData.item.name,
          });
        }}
      />
    );
  };

  return (
    <View style={Style.View}>
      <View style={Style.container}>
        <View style={Style.inputSection}>
          <Icon style={Style.Icon} name="rowing" size={20} color="grey" />
          <TextInput
            style={Style.input}
            placeholder="Category Name"
            keyboardType="default"
            onChangeText={setCatName}
            value={catName}
            autoCapitalize="sentences"
          />
        </View>

        <View style={Style.inputSection}>
          <Icon style={Style.Icon} name="rowing" size={20} color="grey" />
          <TextInput
            style={Style.input}
            placeholder="Category Description"
            keyboardType="default"
            onChangeText={setCatDesc}
            value={catDesc}
            multiline={true}
            autoCapitalize="sentences"
          />
        </View>

        <TouchableOpacity
          style={Style.addContainer}
          onPress={() => {
            dispatch(addCategory(catName, catDesc));
          }}>
          <Text style={Style.addTitle}>CREATE</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={categories}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;
