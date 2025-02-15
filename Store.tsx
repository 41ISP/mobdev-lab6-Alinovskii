import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface IGeneratedQR {
    link: string
    input: string
    timestamp?: number
}

interface IQRStore {
    history: IGeneratedQR[]
    appendHistory: (newQR: IGeneratedQR) => void;
    delHistory:(QRCode: IGeneratedQR) => void;
}

export const useQRStore = create<IQRStore>()(
  persist(
    (set) => ({
        history: [],
        appendHistory: (QRCode) => set((state) => ({...state,history: [...state.history, QRCode]
        })),
            delHistory:(QRCode) => set((state) => ({...state,history: state.history.filter((el)=> el.link != QRCode.link)
            }))
    }),
    {
        name: 'food-storage',
        storage: createJSONStorage(() => AsyncStorage), 
    },
),
)

export default useQRStore;
