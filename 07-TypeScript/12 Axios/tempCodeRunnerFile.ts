import axios, { AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo ", response.data);
  } catch (error: any) {
    console.error("Error", error.message);

    if (axios.isAxiosError(error)) {
      console.log("Axios Error", error.message);

      if (error.response) {
        console.log("Status", error.response.status);
        console.log("Data", error.response.data);
      }
    } else {
      console.log("Error", error.message);
    }
  }
};

fetchData();
