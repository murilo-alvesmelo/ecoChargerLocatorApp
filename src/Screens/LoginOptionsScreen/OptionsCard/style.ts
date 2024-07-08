import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
  touch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    color: colors.brancoFundo,
  },
  text: {
    color: colors.brancoFundo,
    fontSize: 18,
    marginLeft: 20,
  },
});
export default style;
