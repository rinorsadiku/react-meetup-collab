# React Tiptap Collaboration Demo

This is a small React application demonstrating how to set up real-time collaboration using [Tiptap](https://tiptap.dev/) and React. The app showcases how multiple users can edit the same document simultaneously.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Resources](#resources)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm or yarn installed globally

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rinorsadiku/react-meetup-collab.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-meetup-collab
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the App

Before starting the app, you need to configure your collaboration App ID.

## Configuration

1. **Create an App on Tiptap Cloud:**

   - Go to [Tiptap Cloud](https://cloud.tiptap.dev/apps) and create a new app.
   - Create a new app and copy the generated App ID.

2. **Set the App ID in the Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add the following line:

     ```bash
     VITE_COLLAB_APP_ID=your-collab-app-id
     ```

     Replace `your-collab-app-id` with the App ID you copied.

     Now, you can start the app:

     ```bash
       npm run dev
     ```

     or

     ```bash
     yarn dev
     ```

Open your browser and navigate to `http://localhost:3000` to view the app.

## Project Structure

- **`src/components`**: Contains React components.
  - **`TiptapEditor.tsx`**: The main editor component integrating Tiptap.
  - **`UserDetailsForm.tsx`**: Form for entering user details.
  - **...**
- **`src/hooks`**: Custom hooks.
  - **`useEditor.ts`**: Initializes and configures the Tiptap editor.
  - **`useCollabProvider.ts`**: Sets up the collaboration provider.
  - **`useCollabState.ts`**: Returns real-time collaboration state.
- **`src/constants`**: Constant values.
  - **`initial-content.ts`**: Initial content for the editor.
  - **`collab-colors.ts`**: Preset colors for collaboration cursors.
  - **`initial-content.ts`**: Initial editor content
- **`src/types`**: Type definitions and enums.
  - **`LocalStorageKeys.enum.ts`**: Enum for local storage keys.
- **...**

## Usage

- **Enter Your Name**: Upon launching, enter your name or continue as a guest.
- **Real-time Collaboration**: Start editing and see changes from other users in real-time.
- **Editor Features**: Utilize rich-text features like bold, italics, lists, code blocks, and more.

## Resources

- **Tiptap Documentation**: [https://tiptap.dev/docs](https://tiptap.dev/docs)
- **Collaboration Guide**: [https://tiptap.dev/docs/collaboration/getting-started/overview](https://tiptap.dev/docs/collaboration/getting-started/overview)

## License

This project is licensed under the MIT License.
