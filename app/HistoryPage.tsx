
import QRCode from "../components/QRCode";
import useQRStore from "@/Store";
import {StyleSheet, ScrollView, Text, TouchableOpacity, View, Linking } from "react-native";




const HistoryPage = () => {
  const {history, delHistory} = useQRStore((state) => state)

  return (
    <ScrollView  style={styles.View} className="history-page">
      <View className="mainform">
        {history.map((qr) => (
          <View className={`qr${qr.link.length > 120 ? " qr--3" : qr.link.length > 80 ? " qr--2": qr.link.length > 40 ? " qr--1" : ""}`} key={qr.link}>
            <Text style={styles.text}>{qr.input}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(qr.link)}>
            <QRCode image={qr.link}/>  
            </TouchableOpacity>
            <TouchableOpacity className="deletehistory" style={styles.button} onPress={() => delHistory(qr)}><Text>Удалить</Text></TouchableOpacity>  
          </View>  
        )).reverse()}
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor:"#8e4",
    },
    text: {
        height: 20,
        width: 250,
        color: "#FFFF00",
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    View:{
        backgroundColor: "#444334",
    },
    QRCode:{
        justifyContent: "center",
        alignItems: "center",
    }
});
export default HistoryPage;