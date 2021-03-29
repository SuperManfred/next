
// mock serverside data for page ~/form 
export default function handler(req, res) {
    res.status(200).json({ user: 'SuperManfred' })
  }