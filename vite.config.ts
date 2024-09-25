import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '#': path.resolve(__dirname, './src/'),
            '#constants': path.resolve(__dirname, './src/constants/'),
            '#types': path.resolve(__dirname, './src/types'),
            '#components': path.resolve(__dirname, './src/components/'),
            '#pages': path.resolve(__dirname, './src/pages/'),
            '#context': path.resolve(__dirname, './src/context/'),
            '#hooks': path.resolve(__dirname, './src/hooks/'),
            '#utils': path.resolve(__dirname, './src/utils/'),
        },
    },
});
