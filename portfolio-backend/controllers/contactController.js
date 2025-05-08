// backend/controllers/contactController.js
exports.sendMessage = (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all fields' });
    }
  
    // For now, we just simulate saving or handling the message
    console.log('📩 New Contact Message Received:', { name, email, message });
  
    // Send success response
    res.status(200).json({ message: 'Message received successfully!' });
  };
  