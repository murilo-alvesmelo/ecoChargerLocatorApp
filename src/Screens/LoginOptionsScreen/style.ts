import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.pretoFundo,
  },
  textOption: {
    fontSize: 25,
    color: colors.brancoForma,
  },
  icon: {
    marginVertical: 20,
  },
});

export default style;
