import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from "react-native"
import { StyleSheet } from 'react-native';
interface IInput {
    value: string
    onChangeText: ((e: string) => void)
    placeholder: string
}

const Input = ({value, onChangeText, placeholder}: IInput) => {
return (
    <View>
        <TextInput placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.Input}/>
    </View>
)
}
const styles = StyleSheet.create({
    Input: {
     height: 50,
     width: 250,
     borderWidth: 1,
     borderColor: "#000000",
     justifyContent: "center",
     marginTop: 20,
    },
  });
export default Input;