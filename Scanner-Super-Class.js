
class ScannerSuperClass {
    constructor(model, outputFormat, dpi, width, height, color) {
        this.model = model
        this.outputFormat = outputFormat
        this.dpi = dpi
        this.width = width
        this.height = height
        this.color = color
    }

    get model() {
        return this.model
    }

    get outputFormat() {
        return this.outputFormat
    }

    get dpi() {
        return this.dpi
    }

    get width() {
        return this.width
    }

    get height() {
        return this.height
    }

    get color() {
        return this.color
    }

    scanDocuments(model, outputFormat, dpi, width, height, color) {
        console.log(`Scanning Document...`)

        return { model, outputFormat, dpi, width, height, color }
    }

    deleteScannedDocuments(scannedImages) {
        console.log(`Deleting Documents...`)

        return {scannedImages}
    }

    getScannedDocuments(imageLocation) {
        console.log(`Collecting Scanned Documents...`)

        return {imageLocation}
    }
}

let newThing = new ScannerSuperClass('red', 15, '%s')
