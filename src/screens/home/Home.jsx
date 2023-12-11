import * as React from 'react';
import { Button, SafeAreaView} from 'react-native';

import HomeStyle from './Home_Style';
import InputRange from '../../components/InputRange';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={HomeStyle.container}>
      <Button title="Soletrar"  onPress={() => navigation.navigate('')}/>
      
      <Button title="Tira de sentença"  onPress={() => navigation.navigate('Pecs')}/>
    </SafeAreaView>
  );
};

export default Home;

