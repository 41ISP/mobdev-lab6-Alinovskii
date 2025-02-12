import { TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
interface BButton {
  onPress: () => void
  
}
const Button = ({onPress}: BButton) => {

    return(
      <TouchableOpacity style={styles.Button} onPress={onPress}></TouchableOpacity>            
    )
    
}
const styles = StyleSheet.create({
    Button: {
     height: 50,
     width: 250,
     borderWidth: 1,
     borderColor: "#000000",
    marginTop: 10,
    },
  });

export default Button;