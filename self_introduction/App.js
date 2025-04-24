import {StyleSheet , SafeAreaView} from 'react-native'
import React from 'react'
import Profile from './components/Profile'

export default function App () { // khai báo 1 component hàm tên app, 
// Tên component React phải viết hoa chữ cái đầu (React yêu cầu vậy để phân biệt với thẻ HTML)
  return (
    <SafeAreaView style={styles.container}> {/* SafeAreaView là một component đặc biệt dành cho iPhone, giúp đảm bảo nội dung không bị che bởi tai thỏ, thanh trạng thái, cũng hoạt động trên Android 
      // style={styles.container} là cách áp dụng CSS trong React Native.
       Comment // bên trong JSX sẽ làm lỗi cú pháp.*/}
      <Profile/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center', 
    // justifyContent căn theo chiều flexDirection (mặc định column)
    backgroundColor: '#f0f4f7' 
  }
});