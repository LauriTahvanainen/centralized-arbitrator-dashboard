import arbitrable from './abi/Arbitrable.json'
import web3 from './web3'

export const arbitrableInstanceAt = address =>
  new web3.eth.Contract(arbitrable.abi, address, { gasPrice: 20000000000 })
