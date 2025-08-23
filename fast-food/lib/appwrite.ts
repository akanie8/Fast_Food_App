export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT, 
    ProjectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: 'com.halata.fastfood',
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTIONS_USER_ID
    

}