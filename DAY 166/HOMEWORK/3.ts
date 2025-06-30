type ApiResponse = {
  status: "success";
  data: {
    id: number;
    name: string;
  };
};

function getNameFromResponse(response: ApiResponse): string {
  return response.data.name;
}

// 🔍 გამოყენება:
const apiResponse: ApiResponse = {
  status: "success",
  data: {
    id: 1,
    name: "Tornike"
  }
};

console.log(getNameFromResponse(apiResponse)); // "Tornike"
