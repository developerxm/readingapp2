import { Text, View } from 'react-native';

export default function LearnScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white dark:bg-black">
            <Text className="text-2xl font-bold text-black dark:text-white">Learn</Text>
            <Text className="mt-4 text-lg text-gray-600 dark:text-gray-400">Modules coming soon...</Text>
        </View>
    );
}
