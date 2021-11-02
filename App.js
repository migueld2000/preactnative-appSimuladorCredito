import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker,
} from "react-native";

export default function App() {
  const [prestamo, setPrestamo] = useState("");
  const [tipoprestamo, setTipoPrestamo] = useState("vivienda");
  const [numerocuotas, setNumerocuotas] = useState("");
  const [valorcuotas, setValorCuotas] = useState("");
  const [valordeuda, setValorDueda] = useState("");

  const calcPrestamo = () => {
    if (prestamo < 4000000000 || prestamo > 100000000000) {
      alert(
        "EL valor del prestamo teine queser entre 4.000.000.000 y 10.000.000.000"
      );
    }
    if ((numerocuotas < 12 || numerocuotas > 60)) {
      alert(
        "el numero de cuotas debe ser mayor o igual a 12 y menor o igual que 60"
      );
    } else {
      switch (tipoprestamo) {
        case "vivienda":
          setValorCuotas(
            (prestamo * 0.005 * numerocuotas + parseInt(prestamo)) /
            numerocuotas
          );
          setValorDueda(prestamo * 0.005 * numerocuotas + parseInt(prestamo));
          break;
        case "educacion":
          setValorCuotas(
            (prestamo * 0.008 * numerocuotas + parseInt(prestamo)) /
            numerocuotas
          );
          setValorDueda(prestamo * 0.008 * numerocuotas + parseInt(prestamo));
          break;
        case "vehiculo":
          setValorCuotas(
            (prestamo * 0.015 * numerocuotas + parseInt(prestamo)) /
            numerocuotas
          );
          setValorDueda(prestamo * 0.015 * numerocuotas + parseInt(prestamo));
          break;
        case "invercion":
          setValorCuotas(
            (prestamo * 0.02 * numerocuotas + parseInt(prestamo)) / numerocuotas
          );
          setValorDueda(prestamo * 0.02 * numerocuotas + parseInt(prestamo));
          break;
      }
    }
  };

  const limpiar = () => {
    setPrestamo("");
    setNumerocuotas("");
    setValorCuotas("");
    setValorDueda("");
    setTipoPrestamo("");
  };

  return (
    <View style={styles.container}>
      <Text>Simulacion de credito</Text>
      <Text>{"\n"}</Text>
      <Text>Valor del prestamo</Text>
      <TextInput
        style={{ borderBottomWidth: 2 }}
        onChangeText={setPrestamo}
        onValueChange={(itemValue) => setPrestamo(itemValue)}
        value={prestamo}
      />
      <Text>{"\n"}</Text>
      <Text>Tipo de prestamo</Text>
      <Picker
        selectedValue={tipoprestamo}
        style={{ height: 35, width: 180, borderColor: "white" }}
        onValueChange={(itemValue) => setTipoPrestamo(itemValue)}
      >
        <Picker.Item label="Selecciona viaje" value="" />
        <Picker.Item label="Vivienda" value="vivienda" />
        <Picker.Item label="Educacion" value="educacion" />
        <Picker.Item label="Vehiculo" value="vehiculo" />
        <Picker.Item label="Invercion" value="invercion" />
      </Picker>
      <Text>{"\n"}</Text>
      <Text>N° de Cuotas</Text>
      <TextInput
        onChangeText={setNumerocuotas}
        value={numerocuotas}
        style={{ borderBottomWidth: 2 }}
      />
      <Text>{"\n"}</Text>
      <Text>Valor de la cuota</Text>
      <TextInput style={{ borderBottomWidth: 2 }} value={valorcuotas} />
      <Text>{"\n"}</Text>
      <Text>Total de la deuda</Text>
      <TextInput style={{ borderBottomWidth: 2 }} value={valordeuda} />

      <Text>{"\n"}</Text>
      <Button title="Calcular" onPress={calcPrestamo} />
      <Text>{"\n"}</Text>
      <Button title="Limpiar" onPress={limpiar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// valor de la cuota=total de la deuda/numeo de Cuotas
//
