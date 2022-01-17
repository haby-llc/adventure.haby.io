import { getSTR } from "../../../util/alchemy"

export default async function handler(req, res) {
  const { address } = req.query

  const ability = {
    LVL: null,
    HP: null,
    MP: null,
    STR: await getSTR(address),
    DEX: null,
    CON: null,
    INT: null,
    WIS: null,
    CHA: null
  }

  res.status(200).json({ ability })
}