import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black px-4">
      <Text className="text-3xl font-bold text-black dark:text-white text-center mb-4">
        Welcome to Literacy App
      </Text>
      <Text className="text-lg text-gray-600 dark:text-gray-400 text-center">
        Your journey to better reading starts here.
      </Text>
    </View>
  );
}
