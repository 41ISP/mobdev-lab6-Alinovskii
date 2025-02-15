import { useRouter } from 'expo-router';
import {  useState } from 'react';
import 'react-native-reanimated';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
        if(input.trim()) {
            const newLink = decodeURI("https://quickchart.io/qr?text=" + encodeURIComponent(input))
            setLink(newLink);
            appendHistory({input: input, link: newLink, timestamp: (new Date).getTime()})
        }
}
const handleChange = (e: string) => {
    if (input.length <= 41) {
        setInput(e)
      }
      else {
        setInput(state => state.slice(0, 40))
        Alert.alert("Ошибка, Запрос привысил 40 символов!!!")
      }
}

    return (
        <View style={styles.View}>

            <Input placeholder='Введите текст' value={input} onChangeText={handleChange} />
            <Button onPress={onPress} title={'Генерировать.'}></Button>
            <QRCode image={link} ></QRCode>
            <TouchableOpacity
                style={styles.Link}
                onPress={PageHistory}
            ><Text>История генераций</Text></TouchableOpacity>

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
        height: 650,
    },
    Link: {
        justifyContent: "center",
        alignItems: "center",
       borderRadius: 15,
        width: 330,
        height: 50,
        margin: 15,
        backgroundColor:"rgba(9, 99, 6, 0.7)",
    }
});

export default Main