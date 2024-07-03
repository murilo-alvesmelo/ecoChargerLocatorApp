import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.roxo,
    justifyContent: 'space-around',
  },
  viewMsg: {
    padding: 35,
  },
  text: {
    fontSize: 24,
    color: colors.brancoForma,
    fontWeight: '500',
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  viewButton: {
    alignSelf: 'flex-end',
    marginRight: 15,
  },
});

export default style;
