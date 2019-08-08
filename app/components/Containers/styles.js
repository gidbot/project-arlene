import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  largeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryBlue',
  },
  smallContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});
