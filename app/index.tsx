import { useRouter } from 'expo-router';
import {  useState } from 'react';
import 'react-native-reanimated';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Input from '@/components/Input';
import Button from '@/components/Button';
import QRCode from '@/components/QRCode';
import useQRStore from '@/Store';



const Main = () => {
    
const [input, setInput] = useState("");
const [link, setLink] = useState("");
const appendHistory = useQRStore((state) => state.appendHistory)
const router = useRouter();
const PageHistory = () => {
    router.push('/HistoryPage');
}
const onPress = () => {
    const newLink = decodeURI("https://quickchart.io/qr?text=" + encodeURIComponent(input))
    setLink(newLink);
    appendHistory({input: input, link: newLink, timestamp: (new Date).getTime()})
}
const handleChange = (e: string) => {
    setInput(e)
}

    return (
        <View style={styles.View}>

            <Input placeholder='Введите текст' value={input} onChangeText={handleChange} />
            <Button onPress={onPress}><Text>123231</Text></Button>
            <QRCode image={link} ></QRCode>
            <TouchableOpacity
                style={styles.Link}
                onPress={PageHistory}
            ><Text>История</Text></TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    View: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "rgba(34, 148, 30, 0.7)",
        borderRadius: 15,
        boxShadow: "rgba(240, 13, 13, 0.2)",
        margin: 5,
    },
    Link: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        width: 330,
        height: 50,
        backgroundColor:"rgba(34, 148, 30, 0.7)",
    }
});

export default Main