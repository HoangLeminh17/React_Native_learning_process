import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Profile() {
  const Nam_sinh = 2005
  const Nam_nay = new Date().getFullYear()
  const Tuoi = Nam_nay - Nam_sinh
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/meoww.jpg')} />

      <View style={styles.infoBox}>
        <Text style={styles.name}>Lê Minh Hoàng</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Sinh năm: {Nam_sinh}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Tuổi: {Tuoi}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Sinh viên Trường Đại học FPT </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Ngành Công nghệ thông tin</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // căn giữa dọc
    alignItems: 'center', // căn giữa ngang
    backgroundColor: '#f0f4f7',
    padding: 20, // Khoảng cách giữa viền box và nội dung bên trong
    marginTop: 100
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 50,

  },
  infoBox: {
    backgroundColor: '#d0f0f8', // màu xanh nhạt
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
