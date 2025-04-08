
export async function addDataToDatabase(name: string, email: string, content: string) {
  try {
    const response = await fetch('http://localhost:3000/api/addemail', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, content})
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    return response.status;
  } catch (error) {
    console.error('Error adding data to database:', error);
    throw error;
  }
}