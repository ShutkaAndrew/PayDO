import { defineConfig} from '@playwright/test'


export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    reporter: [['list'], ['html']],
    expect: {
     timeout: 5000
                },

    projects: [
        {
            name: 'E2E',
            use: {
                
                baseURL: 'https://paydo.com/',
                headless:false,
                

            }
        },

        {
            name: 'API',
            use: {
                baseURL: 'https://api.paydo.com/'
            }
        }
    ]
});