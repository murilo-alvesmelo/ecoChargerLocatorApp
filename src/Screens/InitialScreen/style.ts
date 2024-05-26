import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.roxo,
  },
  subContainerTop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subContainerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  viewLogo: {
    padding: 50,
    borderRadius: 10,
    backgroundColor: colors.roxo,
    shadowColor: colors.brancoFundo,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  viewTitle: {
    padding: 10,
    width: '60%',
    borderColor: colors.brancoFundo,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.brancoForma,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
});

export default style;
