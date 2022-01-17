export default function handler(req, res) {
  const { address } = req.query
  res.end(`Post: ${address}`)
}