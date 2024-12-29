const { envs } = require('./config/env')
const { startSercver } = require('./server/server')

const main = () => {
    startSercver({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

(async()=>{
    main()
})()
