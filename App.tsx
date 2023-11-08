import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar
} from 'react-native';
import { data } from './src/constants/mockData';
import Item from './src/components/Item';

const App = () => {
  const sortedData = data.slice().sort((a, b) => {
    if (a.category === 'advertisement' && b.category !== 'advertisement') {
      return 1; // Move 'advertisement' to the end
    } else if (a.category !== 'advertisement' && b.category === 'advertisement') {
      return -1; // Keep 'advertisement' at the beginning
    } else {
      return 0; // Maintain the order for other items
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sortedData}
        horizontal={true}
        renderItem={({item}) => <Item title={item.title} imageSource={item.image} category={item.category} starRating={item.rating} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
