import { Text, View } from 'react-native';

export default function ProfileScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white dark:bg-black">
            <Text className="text-2xl font-bold text-black dark:text-white">Profile</Text>
            <Text className="mt-4 text-lg text-gray-600 dark:text-gray-400">User stats coming soon...</Text>
        </View>
    );
}
