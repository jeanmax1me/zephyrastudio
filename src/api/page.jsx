export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { email } = req.body; // Assuming your form field is named "email"
  
        // Validate the email (you can use a validation library)
        if (!isValidEmail(email)) {
          res.status(400).json({ error: 'Invalid email address' });
          return;
        }
  
        // Process the email (e.g., store it in a database or send a confirmation email)
        // You can add your processing logic here
  
        // For demonstration purposes, we'll just send a success response
        res.status(200).json({ message: 'Subscription successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  
  function isValidEmail(email) {
    // Implement your email validation logic here
    // You can use a library like 'validator' for email validation
    return true; // Replace with your validation code
  }