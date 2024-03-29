// lib/tailwind.js
import { create } from 'twrnc'

// create the customized version...
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tw = create(require('../tailwind.config.js')) 

// ... and then this becomes the main function your app uses
export default tw
