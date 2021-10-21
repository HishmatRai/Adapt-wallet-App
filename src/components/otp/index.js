import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
const styles = StyleSheet.create({
  root: {flex: 1, padding: 0},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: "20%",
    height: 50,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#D6D6D6',
    textAlign: 'center',
    borderRadius:5,
    color:"black",
    backgroundColor:"#D6D6D6"
  },
  focusCell: {
    borderColor: 'white',
  },
});
 
const CELL_COUNT = 4;
 
const Otp = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};
 
export default Otp;