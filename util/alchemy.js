function getAlchemyURL() {
  return `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
}

async function fetchAlchemyData(method, params) {
  try {
    console.log(getAlchemyURL())
    const alchemyRes = await fetch(getAlchemyURL(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
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

async function getSTR(address) {
  try {
    const res = await fetchAlchemyData('alchemy_getAssetTransfers', [{
      "fromBlock": "0xC30965",
      "toBlock": "latest",
      "fromAddress": address,
    }])

    return res.result.transfers.length
  } catch (error) {
   console.log(error)
   return 0 
  }  
}

export {
  getSTR
}