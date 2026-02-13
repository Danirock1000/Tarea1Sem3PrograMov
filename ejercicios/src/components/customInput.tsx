import { View,TextInput,StyleSheet } from "react-native";

// Declaracion de propiedades para el componente CustomInput
type CustomInputProps = {
    placeholder: string;
    value: string | number;
    onChange: (value: string | number) => void;
    typeInput: "text" | "number";
}

export default function CustomInput({placeholder, value, onChange, typeInput}: CustomInputProps) {

// Manejo del cambio de texto en el TextInput
    const handleChange = (text: string) => {
        if (typeInput === 'number') {
            onChange(text === '' ? 0 : Number(text));
        } else {
            onChange(text);
        }
    };
// Renderizado del componente CustomInput
    return (
    <View>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
        keyboardType={typeInput === 'number' ? 'numeric' : 'default'}
        />
    </View>
);
}
// Estilos para el componente CustomInput
const styles = StyleSheet.create({
    
input: {
    marginVertical: 10,
    width: "80%",
    borderBlockColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
},

});