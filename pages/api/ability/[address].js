import {
  get6mBlock,
  getFirstTx,
  getFromTx,
  getToTx,
  getTokens,
  getNFTCount,
} from "../../../util/alchemy"

function logCalc(t, logBase, exp) {
  const x = Math.pow(t, exp) + 1
  const logx = Math.log(x) / Math.log(logBase)

  return Math.round(logx + 5)
}

function getSTR(fromTx) {
  return logCalc(fromTx.length, 2, 3)
}

function getDEX(tokens) {
  const ownedTokens = tokens.filter(({ tokenBalance }) => parseInt(tokenBalance, 16) > 0)
  return logCalc(ownedTokens.length, 2, 5)
}

function getCON(toTx) {
  return logCalc(toTx.length, 2, 3)
}

function getINT(nftCount) {
  return logCalc(nftCount, 2, 5)
}

function getWIS(firstTx, fromTx, toTx) {
  if (firstTx) {
    const latestFromTx = fromTx.length > 0 ? fromTx[fromTx.length - 1].blockNum : 0
    const latestToTx = toTx.length > 0 ? toTx[toTx.length - 1].blockNum : 0

    const latestFromTxInt = parseInt(latestFromTx, 16)
    const latestToTxInt = parseInt(latestToTx, 16)

    const latestTx = (latestFromTxInt > latestToTxInt) ? latestFromTxInt : latestToTxInt

    const blockDiff = latestTx - parseInt(firstTx.blockNum, 16)
    return logCalc(blockDiff, 10, 3)
  }
  
  return logCalc(0, 10, 5)
}

function getCHA(fromTx, toTx) {
  const toAddresses = fromTx.map(tx => tx.to);
  const fromAddresses = toTx.map(tx => tx.from);

  const dedupAddresses = [...new Set([...toAddresses, ...fromAddresses])];
  return logCalc(dedupAddresses.length, 2, 3)
}

export default async function handler(req, res) {
  const { address } = req.query
  const firstTx = await getFirstTx(address)
  const fromBlock = await get6mBlock()
  const fromTx = await getFromTx(fromBlock, address)
  const toTx = await getToTx(fromBlock, address)
  const tokens = await getTokens(address)
  const nftCount = await getNFTCount(address)

  const STR = getSTR(fromTx)
  const DEX = getDEX(tokens)
  const CON = getCON(toTx)
  const INT = getINT(nftCount)
  const WIS = getWIS(firstTx, fromTx, toTx)
  const CHA = getCHA(fromTx, toTx)

  const ability = {
    LVL: Math.round((STR + DEX + CON + INT + WIS + CHA) / 5) - 5,
    HP: 10 * (STR + DEX + CON) + 50,
    MP: 10 * (INT + WIS + CHA) + 50,
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA
  }

  res.status(200).json({ address: ability })
}