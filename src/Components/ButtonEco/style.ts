import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.brancoForma,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.preto,
    padding: 16,
  },
  touch: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    color: colors.brancoForma,
  },
});

export default style;
