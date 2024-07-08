import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pretoFundo,
    padding: 20,
    justifyContent: 'center',
  },
  viewInputs: {
    marginBottom: 20,
  },
  icon: {
    marginVertical: 20,
  },
  textOption: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default style;
