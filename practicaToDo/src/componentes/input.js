import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function input({ inputValue, setInputValue }) {

    return (
        <>
            <TextInput
                style={styles.input}
                keyboardType='default'
                placeholder='Agrega una tarea'
                value={inputValue}
                onChangeText={setInputValue}
            />
        </>
    );

}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: 280,
        padding: 10,
        margin: 5,
        fontSize: 15,
        fontWeight: '900',
        borderColor: 'black', // Color del borde
        borderWidth: 1, // Ancho del borde
        borderRadius: 5,
    }
});