import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.brancoForma,
  },
  containerButton: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.preto,
    padding: 16,
  },
  touch: {
    width: '100%',
    alignItems: 'center',
  },
});

export default style;
