
import QRCode from "../components/QRCode";
import useQRStore from "@/Store";
import {StyleSheet, ScrollView, Text, TouchableOpacity, View, Linking } from "react-native";




const HistoryPage = () => {
  const {history, delHistory} = useQRStore((state) => state)

  return (
    <ScrollView  style={styles.View} className="history-page">
      <View className="mainform">
        {history.map((qr) => (
          <View key={qr.link}>
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
        backgroundColor:"#FF4500",
    },
    text: {
        width: "100%",
        color: "#FFFF00",
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    View:{
        backgroundColor: "#0000CD",
    },
    QRCode:{
        justifyContent: "center",
        alignItems: "center",
    }
});
export default HistoryPage;