function getAlchemyURL() {
  return `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
}

function logCalc(t, logBase, exp) {
  if (logBase === 2) {
    return Math.round(Math.log2(Math.pow(t, exp) + 1) + 5)
  } 
  
  return Math.round(Math.log10(Math.pow(t, exp) + 1) + 5)
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

    return logCalc(res.result.transfers.length, 2, 3)
  } catch (error) {
   console.log(error)
   return 0 
  }  
}

export {
  getSTR
}