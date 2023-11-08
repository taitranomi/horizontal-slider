import { Image } from "react-native"

type ImageFormProps = {
    category: string;
    imageSource: any;
};

const ImageForm = ({ category, imageSource }: ImageFormProps) => { 
    // Your conditional rendering logic goes here
    if (category !== "advertisement") {
        return (
        <Image
            source={
            category === "advertisement"
                ? imageSource
                : typeof imageSource === "string"
                ? { uri: imageSource }
                : imageSource
            }
            style={{ width: 250, height: 300 }}
            resizeMode="cover"
        />
        );
    } else {
        return (
        <Image
            source={imageSource}
            style={{ width: 250, height: 300 }}
            resizeMode="cover"
        />
        );
    }
}

export default ImageForm;