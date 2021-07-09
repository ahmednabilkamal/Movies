import {StyleSheet, Platform} from 'react-native';

const Style = StyleSheet.create({
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
    marginStart: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Icon: {
    padding: 10,
  },
  addContainer: {
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#26C2E3',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTitle: {
    color: 'white',
    fontSize: 25,
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
    // flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  gridTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    marginStart: 10,
  },
  gridDesc: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    color: 'black',
    alignSelf: 'flex-start',
    marginStart: 10,
    marginTop: 10,
  },
  gridImage: {width: 130, height: 200},
  movieContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 130,
    margin: 12,
    padding: 8,
    flexDirection: 'row',
  },
  movieImage: {
    width: '30%',
    height: '100%',
    borderRadius: 15,
  },
  movieDetails: {
    width: '70%',
    height: '100%',
    marginStart: 15,
    marginEnd: 15,
  },
  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieDesc: {
    color: '#949494',
    marginStart: 5,
    marginTop: 5,
  },
  edit: {
    marginEnd: 10,
    color: 'blue',
  },
  delete: {
    color: '#890d3d',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  footerRight: {
    marginEnd: 20,
    flexDirection: 'row',
    marginVertical: 10,
    position: 'absolute',
    right: 0,
  },

  rating: {
    position: 'absolute',
    left: 0,
  },
});

export default Style;
