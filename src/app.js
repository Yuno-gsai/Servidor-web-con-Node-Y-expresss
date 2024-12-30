import { envs } from './config/env.js'
import { startSercver } from './server/server.js'

const main = () => {
    startSercver({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async()=>{
    main()
})()
