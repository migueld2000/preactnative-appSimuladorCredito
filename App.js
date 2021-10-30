import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

export default function App() {
  const [prestamo, setPrestamo] = useState("");
  const [tipoprestamo, setTipoPrestamo] = useState("");
  const [numerocuotas, setNumerocuotas] = useState("");
  const [valorcuotas, setValorCuotas] = useState("");
  const [totaldeuda, setTotalDeuda] = useState("");
  const [resultado, setResultado] = useState("");

  const calcPrestamo = () => {
    if (prestamo != "" && tipoprestamo != "" && valorcuotas!= "" && numerocuotas != "") {
      let totaldeuda = 0;
      if (prestamo >= 4000000000 && prestamo <= 100000000000) {
        switch (tipoprestamo) {
          case 'vivienda':
            if (numerocuotas >= 12, numerocuotas <= 60) {
              totaldeuda = prestamo * 0.5;
              valorcuotas = totaldeuda / numerocuotas;
            }
            else {
              alert("el numero de cuotas debe ser mayor o igual a 12 y menor o igual que 60")
            }
            break;
          case 'educacion':
            totaldeuda = prestamo * 0.7;
            if (numerocuotas >= 12, numerocuotas <= 60) {
              valorcuotas = totaldeuda / numerocuotas;
            }
            else {
              alert("el numero de cuotas debe ser mayor o igual a 12 y menor o igual que 60")
            }
            break;
          case 'vehiculo':
            totaldeuda = prestamo * 1.5;
            if (numerocuotas >= 12, numerocuotas <= 60) {
              valorcuotas = totaldeuda / numerocuotas;
            }
            else {
              alert("el numero de cuotas debe ser mayor o igual a 12 y menor o igual que 60")
            }
            break;
          case 'invercion':
            totaldeuda = prestamo * 2;
            if (numerocuotas >= 12, numerocuotas <= 60) {
              valorcuotas = totaldeuda / numerocuotas;
            }
            else {
              alert("el numero de cuotas debe ser mayor o igual a 12 y menor o igual que 60")
            }
            break;
          case 'c':
            totaldeuda = 0;
            setPrestamo("");
            setTipoPrestamo('');
            setValorCuotas("");
            setTotalDeuda("");
            break;
        }
        setResultado(totaldeuda);
      }
      else {
        alert("el prestamo tiene que ser mayor o igual a 4 millones y menor a 1 millon")
      }
    }
    else {
      alert("Se debe ingresar los valores");
    }
  };
  

  return (
    <View style={styles.container}>
      <Text>Simulacion de credito</Text>
      <Text>{"\n"}</Text>
      <Text>Valor del prestamo</Text>
      <TextInput
        style={{ borderBottomWidth: 2 }}
        onChangeText={prestamo => setPrestamo(prestamo)}
      />
      <Text>{"\n"}</Text>
      <Text>Tipo de prestamo</Text>
      <Picker
            selectedValue={tipoprestamo}
            style={{ height: 35, width: 180, borderColor: "white" }}
            onValueChange={(itemValue, itemIndex) => setTipoPrestamo(itemValue)}
          >
            <Picker.Item label="Selecciona viaje" value="" />
            <Picker.Item label="Vivienda" value="vivienda" />
            <Picker.Item label="Educacion" value="educacion" />
            <Picker.Item label="Vehiculo" value="vehiculo" />
            <Picker.Item label="Invercion" value="invercion" />
          </Picker>
      <Text>{"\n"}</Text>
      <Text>Nro de Cuotas</Text>
      <TextInput
        onChangeText={numerocuotas => setNumerocuotas(numerocuotas)}
        style={{borderBottomWidth: 2 }}
      />
      <Text>{"\n"}</Text>
      <Text>Valor de la cuota</Text>
      <TextInput
        style={{ borderBottomWidth: 2 }}
        onChangeText={valorcuotas => setValorCuotas(valorcuotas)}
        valor={resultado}
      />
      <Text>{"\n"}</Text>
      <Text>Total de la deuda</Text>
      <TextInput
        style={{ borderBottomWidth: 2 }}
        onChangeText={totaldeuda => setTotalDeuda(totaldeuda)}
        valor={resultado}
      />

      <Text>{"\n"}</Text>
      <Button title="Calcular"
        onPress={() => calcPrestamo()} />
      <Text>{"\n"}</Text>
      <Button title="Limpiar" onPress={() => calcPrestamo("c")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// valor de la cuota=total de la deuda/numeo de Cuotas
//