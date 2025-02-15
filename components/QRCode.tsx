import { Link } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
interface QQRcode {
    image: string
}
const QRCode = ({image}: QQRcode) => {
    return(
        <Image source={{uri: image}} style={styles.Qr}/>
       
    )
}
const styles = StyleSheet.create({
    Qr: {
     height: 350,
     width: 360,
    marginTop: 25,
    },
  });

export default QRCode;