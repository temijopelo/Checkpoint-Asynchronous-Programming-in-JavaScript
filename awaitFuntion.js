const mockApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Fetched data" });
    }, 1000);
  });
};

async function awaitCall() {
  console.log("loading...");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Log the fetched data
    console.log("Data received:", data);
  } catch (error) {
    console.error("Failed to fetch data. Please try again later.");
    console.error("Error details:", error.message);
  }

  // const res = await mockApi();
  //   console.log("data received", res.data);
}

awaitCall();
