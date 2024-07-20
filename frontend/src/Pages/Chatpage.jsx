import axios from "axios";
import { useEffect } from "react";

function Chatpage() {
  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      console.log(data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      <h1>Chatpage</h1>
    </div>
  );
}

export default Chatpage;
