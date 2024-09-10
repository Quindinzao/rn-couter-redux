import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.mainText}>{count}</Text>
        <TouchableOpacity style={styles.touchableBlue} activeOpacity={0.7} onPress={() => dispatch(increment())}>
          <Text style={styles.text}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableRed} activeOpacity={0.7} onPress={() => dispatch(decrement())}>
          <Text style={styles.text}>-1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  touchableBlue: {
    width: '100%',
    height: 54,
    marginBottom: 16,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'darkblue',
  },
  touchableRed: {
    width: '100%',
    height: 54,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'darkred',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Counter;
