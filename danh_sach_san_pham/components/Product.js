import React, { useState } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const Product = ({name, price}) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount=> prevCount+1); // set_cnt(cnt+1)
};

  const decrease = () => {
    setCount(prevCount=> (prevCount > 0 ? prevCount-1 : 0)) 
    // Nếu ấn thì trừ 1, đảm bảo > 0, nếu <= 0 giữ nguyên
};

  const NumberPrice = parseFloat(price.replace(/\./g, '').replace(/\s+/g, ''));
 // chuyển từ dạng text sang số, bỏ dấu cách
  const TotalPrice = NumberPrice * count;
  return (
  <View style={styles.box}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>Giá: {price} đ </Text> {/* Hiển thị giá ở đây */}
    <Text style={styles.number}>Số lượng: {count}</Text>
    <Text style={styles.total}>Tổng tiền sản phẩm: {TotalPrice.toLocaleString('vi-VN')} đ</Text>
    <View style={styles.buttons}>
      <Button title="+" onPress={increase} />
      <Button title="-" onPress={decrease} />
    </View>
  </View>
);
};
const styles = StyleSheet.create({
  box: {
    marginBottom :20, // cách sản phẩm tiếp theo
    padding: 20,  // Khoảng cách giữa viền box và nội dung bên trong
    borderRadius: 10, // Bo tròn các góc của box
    backgroundColor: '#e0f7fa', // Màu nền cho box sản phẩm
  },
  
  name: {
    fontSize: 20,
    fontWeight: 'bold', // Làm chữ đậm để nổi bật
  },
  price: {
    fontWeight: '400', // Đậm vừa phải cho phần giá
    fontSize: 15,
    marginTop: 5
  },
  total: {
    fontSize: 14,
    fontWeight: 'Bold'
  },
  number: {
    marginTop: 10
  },
  buttons: {
    marginTop: 15,  // Tạo khoảng cách phía trên các nút bấm (so với dòng trước)
    flexDirection: 'row',  // Hiển thị các nút ngang hàng (theo chiều ngang)
    gap: 10,  // Khoảng cách giữa các nút "+" và "-"
  },
});
export default Product;