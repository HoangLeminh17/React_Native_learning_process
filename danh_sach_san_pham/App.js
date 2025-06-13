import { Text, ScrollView, StyleSheet } from 'react-native';
import Product from './components/Product';
import React from 'react'

// Dùng ScrollView thay vì View để cuộn được nếu nội dung quá dài

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Product name = 'Áo thun' price = '150.000'/>
      <Product name = 'Quần jeans' price="300.000"/>
      <Product name = 'Mũ dev' price="50.000"/>
      <Product name = 'Quần Skibidi' price ='0' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, //  tạo khoảng cách đều từ nội dung bên trong container đến biên ngoài của container.
    marginTop: 60 // đẩy container xuống dưới một khoảng cách lớn hơn, tạo không gian trống ở phía trên nó.
  }
});
