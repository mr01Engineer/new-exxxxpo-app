import { StyleSheet, Image } from "react-native";

export default App = ({ placeholderImage, selectedImage }) => {
  let image = selectedImage ? { uri: selectedImage } : placeholderImage;
  return <Image source={image} style={styles.image}></Image>;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
