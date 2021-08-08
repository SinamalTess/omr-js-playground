interface Options {
    rootPath: string
    imagesDirectory: string
    labelsDirectory: string
}

type Fetch = (isLocal: boolean) => void

export default class Dataset {

    options: Options

    constructor(options?: Options) {
        this.options = options
    }

    fetch: Fetch = async (isLocal) => {
        const url = this.options.rootPath + this.options.imagesDirectory
        const response = await fetch(url)
        const reader = response.body.getReader()
        const { value } = await reader.read()
        return value
    }
}
