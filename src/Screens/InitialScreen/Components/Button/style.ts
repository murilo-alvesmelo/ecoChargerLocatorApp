import {StyleSheet} from 'react-native';
import colors from '../../../../utils/colors';

const style = StyleSheet.create({
  touch: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: colors.roxo,
    borderColor: colors.brancoFundo,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: colors.corPreto,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  titleTouch: {
    color: colors.brancoForma,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
});

export default style;
