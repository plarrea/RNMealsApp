import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressed : undefined,
      ]}
      onPress={onPress}
    >
      <View
        style={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name={icon} size={24} color={color || 'white'} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    width: '35',
  },
  pressed: {
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
