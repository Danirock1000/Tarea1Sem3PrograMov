import {View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Declaracion de propiedades para el componente CustomButtom
interface customButtomProps{
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary";

}
// Componente CustomButtom que renderiza un botón personalizado
export default function CustomButtom ({title, onClick, variant = "primary"}: customButtomProps) {
        const styles = getStyles(variant);

    return(
        
        <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
// Función para obtener los estilos del botón según la variante
const getStyles = (variant: 'primary' | 'secondary') => StyleSheet.create({

container: {
    backgroundColor: variant === "primary" ? "#2e4566": "white",
    borderColor: "#aec9ff",
    width: "80%",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "flex-start"
},
text: {
    color: variant === "primary" ? "white": "blue",
    fontSize: 18,
    fontWeight: "500"
}

});