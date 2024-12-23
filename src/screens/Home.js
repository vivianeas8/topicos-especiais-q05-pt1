import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CustomImage from '../components/CustomImage';

import imagemLocal from '../../assets/coldplay-albums.jpg';
const ImagemRemotaURI =
  'https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png';

export default function Home({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ScrollView vertical>
        <Text>Tela Home {route.params?.email}</Text>
        <Text>Olá {route.params?.name}, seja bem vindo!</Text>
        <CustomImage
          fromWeb={false}
          image={require('../../assets/snack-icon.png')}
          title={'Imagem Local com "require"'}
          width={213}
          height={213}
        />
        <CustomImage
          fromWeb={false}
          image={imagemLocal}
          title={'Imagem Local com "import"'}
          width={213}
          height={213}
        />
        <CustomImage
          fromWeb={true}
          image={ImagemRemotaURI}
          title={'Imagem Local com "uri"'}
          width={213}
          height={213}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
  },
});
