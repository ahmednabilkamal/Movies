import {StyleSheet, Platform} from 'react-native';

const Style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#e4f4ef',
  },
  container: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    padding: 10,
  },
  title: {
    color: '#26C2E3',
    fontSize: 18,
    marginTop: 5,
    marginStart: 15,
  },
  inputSection: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginStart: 20,
    marginEnd: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Icon: {
    padding: 10,
  },
  addContainer: {
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#26C2E3',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTitle: {
    color: 'white',
    fontSize: 20,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'black',
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    // elevation: 5,
  },
  gridContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    marginStart: 10,
  },
  gridImage: {width: 130, height: 200},
});

export default Style;
