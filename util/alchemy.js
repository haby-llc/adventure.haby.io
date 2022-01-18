function getAlchemyURL() {
  return `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
}

function getAlchemyNFTUrl(address) {
  return `https://eth-mainnet.g.alchemy.com/${process.env.ALCHEMY_API_KEY}/v1/getNFTs/?owner=${address}`
}

async function fetchAlchemyData(method, params) {
  try {
    const alchemyRes = await fetch(getAlchemyURL(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "id": 0,
        "method": method,
        "params": params,
      })
    })
  
    const json = await alchemyRes.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

async function get6mBlock() {
  try {
    const res = await fetchAlchemyData('eth_getBlockByNumber', ['latest', false])
    const { number } = res.result
    return `0x${(parseInt(number, 16) - 1000000).toString(16)}`
  } catch (error) {
    console.log(error)
  }
}

async function getFirstTx(address) {
  try {
    const resFrom = await fetchAlchemyData('alchemy_getAssetTransfers', [{
      "fromBlock": "0x1",
      "fromAddress": address,
    }])

    const resTo = await fetchAlchemyData('alchemy_getAssetTransfers', [{
      "fromBlock": "0x1",
      "toAddress": address,
    }])

    const firstFromTx = resFrom.result.transfers[0]
    const firstToTx = resTo.result.transfers[0]

    if (parseInt(firstFromTx, 16) > parseInt(firstToTx, 16)) {
      return firstToTx
    }

    return firstFromTx
  } catch (error) {
    console.error(error)
    return []
  }
}

async function getFromTx(fromBlock, address) {
  try {
    const res = await fetchAlchemyData('alchemy_getAssetTransfers', [{
      "fromBlock": fromBlock,
      "toBlock": "latest",
      "fromAddress": address,
    }])

    return res.result.transfers
  } catch (error) {
   console.log(error)
   return 0 
  }  
}

async function getToTx(fromBlock, address) {
  try {
    const res = await fetchAlchemyData('alchemy_getAssetTransfers', [{
      "fromBlock": fromBlock,
      "toBlock": "latest",
      "toAddress": address,
    }])

    return res.result.transfers
  } catch (error) {
   console.log(error)
   return 0 
  }  
}

async function getTokens(address) {
  try {
    const res = await fetchAlchemyData('alchemy_getTokenBalances', [address, 'DEFAULT_TOKENS'])
    return res.result.tokenBalances
  } catch (error) {
    console.log(error)
    return []
  }
}

async function getNFTCount(address) {
  try {
    const res = await fetch(getAlchemyNFTUrl(address))
    const json = res.json()
    return json.ownedNfts.totalCount
  } catch (error) {
    console.log(error)
    return 0
  }
}

export {
  get6mBlock,
  getFirstTx,
  getFromTx,
  getToTx,
  getTokens,
  getNFTCount
}