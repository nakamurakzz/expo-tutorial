import { Image } from 'expo-image';
import { View, StyleSheet} from 'react-native'

import ImageViewer from './ImageViewer';
import Button from './Button';

const PlaceholderImageURI = 'https://docs.expo.dev/static/images/tutorial/background-image.png'

export default function Index() {
  return (
   <View style={styles.container}>
    <View style={styles.imageContainer}>
      <ImageViewer imageSource={PlaceholderImageURI} />
    </View>
    <View style={styles.footerContainer}>
      <Button label='Choose a photo' theme='primary'/>
      <Button label='Use this photo' />
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
