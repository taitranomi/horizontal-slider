import React from "react";
import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StarRating from "react-native-star-rating-widget";
import ImageForm from "./ImageForm";

type ItemProps = {imageSource: any, category: string, starRating: number | undefined, title: string};

const Item = ({imageSource, category, starRating, title}: ItemProps) => {
    const handlePress = (url: string) => {
      if (url) {
        Linking.openURL(url);
      }
    };
  
    return <TouchableOpacity onPress={() => handlePress(imageSource?.uri)}>
      <View style={{ width: 200, height: 300, margin: 40 }}>
        <ImageForm category={category} imageSource={imageSource}/>
        <Text style={styles.category}>
          {category}
        </Text>
        {category !== "advertisement" ? <StarRating
          rating={starRating ?? 0} 
          onChange={() => {console.log('rating')}}    /> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  };

  const styles = StyleSheet.create({
    category: { fontSize: 12, marginTop: 5 },
    title: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  });

  export default Item;