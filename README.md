# Antigravity Literacy App

A mobile application built with Expo and React Native to help users improve their reading and literacy skills.

## Features
- Tab-based navigation for Home, Learn, and Profile screens.
- Dark/Light mode support.
- Backend powered by Supabase for data and authentication.
- Styled using NativeWind (Tailwind CSS for React Native).

## Getting Started

### Prerequisites

1. Node.js (LTS version)
2. Expo CLI (`npm install -g expo-cli`)
3. A Supabase project (for backend services)

### Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone [YOUR_REPO_URL]
   cd antigravity
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Variables:**
   Create a file named `.env` in the root directory and add your Supabase credentials:
   \`\`\`
   EXPO_PUBLIC_SUPABASE_URL="[YOUR_SUPABASE_URL]"
   EXPO_PUBLIC_SUPABASE_ANON_KEY="[YOUR_ANON_KEY]"
   \`\`\`

### Running the App

To start the development server:

\`\`\`bash
npm start
\`\`\`

This will open the Expo Dev Tools in your browser. You can then:
- Scan the QR code with the Expo Go app on your phone (iOS or Android).
- Press `w` to run the app in your web browser.
- Press `a` or `i` to run on an Android or iOS emulator/simulator.
