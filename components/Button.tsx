import { TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { Text } from "react-native";
interface BButton {
  onPress: () => void
  title: string,
}
const Button = ({onPress, title}: BButton) => {

    return(
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>            
    )
    
}
const styles = StyleSheet.create({
    Button: {
     height: 20,
     width: 250,
     borderWidth: 1,
     borderColor: "#000000",
    marginTop: 10,
    },
    text: {
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      textAlign: "center",
    }
  });

export default Button;