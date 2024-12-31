import { Image } from "expo-image"
import { StyleSheet } from "react-native"

type Props = {
  imageSource: string
  selectedImage?: string
}

export default function ImageViewer({ imageSource, selectedImage }: Props){
  return <Image source={selectedImage ?? imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})