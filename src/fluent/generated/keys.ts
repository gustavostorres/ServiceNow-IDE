import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '5cad35e1e02f412c9544c92e561e917e'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '6d5d9799ee224191bc54e4d9b59eb470'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '2ea21861a99c442fb6fe9960ddc22472'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'c888ae5bfc314376a707c6cba0b9cd10'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '4af4606a92ce4b5db87fdad94d26d761'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'd658ab674f7541a7affb2af2f7bd8265'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '1e8c5dcd1b9a4eb9b0d9d99c5b6c5e53'
                    }
                }
            }
        }
    }
}
