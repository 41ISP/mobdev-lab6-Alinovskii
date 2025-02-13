import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import Input from '@/components/Input';
import { TextInput } from 'react-native-gesture-handler';
import Button from '@/components/Button';
import QRCode from '@/components/QRCode';



const Main = () => {
    
const [input, setInput] = useState("");
const [link, setLink] = useState("");
const router = useRouter();
const PageHistory = () => {
    router.push('/HistoryPage');
}
const onPress = () => {
    const newLink = decodeURI("https://quickchart.io/qr?text=" + encodeURIComponent(input))
    setLink(newLink);
}
const handleChange = (e: string) => {
    setInput(e)
}

    return (
        <View style={styles.View}>

            <Input placeholder='Введите текст' value={input} onChangeText={handleChange} />
            <Button onPress={onPress}></Button>
            <QRCode image={link} ></QRCode>
            <TouchableOpacity
                style={styles.Link}
                onPress={PageHistory}
            />

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
        height: 50,
        width: 250,
        backgroundColor: "#000000",
        margin: 15,
    }
});

export default Main