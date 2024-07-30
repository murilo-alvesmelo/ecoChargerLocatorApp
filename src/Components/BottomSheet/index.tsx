import {StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import colors from '../../utils/colors';

type BottomSheetEcoProps = {
  children: React.ReactNode;
};

export default function BottomSheetEco({children}: BottomSheetEcoProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={[150, 300]} index={0}>
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    color: colors.preto,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: colors.preto,
  },
});
