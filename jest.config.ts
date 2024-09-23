export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                'tsconfig': 'tsconfig.app.json',
            },
        ],
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.svg$': 'jest-transformer-svg',
        '^#/(.*)$': '<rootDir>/src/$1',
        '^#constants/(.*)$': '<rootDir>/src/constants/$1',
        '^#types/(.*)$': '<rootDir>/src/types/$1',
        '^#components/(.*)$': '<rootDir>/src/components/$1',
        '^#pages/(.*)$': '<rootDir>/src/pages/$1',
        '^#contexts/(.*)$': '<rootDir>/src/contexts/$1',
        '^#hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^#utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
