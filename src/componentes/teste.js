import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet,Text } from 'react-native'
import Estilo from './estilo'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

  const handleLogin = () => {
    // Armazenar os dados digitados no estado 'submittedData'
    setSubmittedData({ email, password });
    // Você também pode fazer outras ações aqui, como enviar os dados para um servidor de autenticação
  };
  return (
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      {submittedData && (
        <View style={styles.submittedDataContainer}>
          <Text>Email: {submittedData.email}</Text>
          <Text>Senha: {submittedData.password}</Text>
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  submittedDataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default LoginScreen;
