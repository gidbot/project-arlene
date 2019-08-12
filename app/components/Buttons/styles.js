import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '$white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#9E768F',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '$white',
    marginVertical: 10
  }
});
