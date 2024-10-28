import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InRlc3QiLCJhZGRyZXNzIjoiMTIzIiwicGFzc3dvcmQiOiIkMmIkMTAkbzN3ZXg3cnJXNmkwQkVrMEc2MUljZTRTcHh1SzhFWk5VN2lYTkVBUVFoL2R6bG1NMkxkNnkiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzMwMDk5MTgxLCJleHAiOjE3MzAxODU1ODF9.8jBvIWmQ4c-mzKzqR6jIMcZsq-vXKbUYUn87IfbOZfE",
  },
});

