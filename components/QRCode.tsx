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
     width: 350,
    marginTop: 15,
    },
  });

export default QRCode;