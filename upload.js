const form = document.getElementById('uploadForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  message.textContent = 'Uploading...';

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    if (response.ok) {
      message.textContent = `✅ Upload successful: ${result.fileUrl}`;
    } else {
      message.textContent = `❌ Upload failed: ${result.error}`;
    }
  } catch (err) {
    message.textContent = `❌ Upload error: ${err.message}`;
  }
});