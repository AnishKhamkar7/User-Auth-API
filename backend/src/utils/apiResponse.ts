import { Response } from "express";

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  message?: string;
}

const apiResponse = <T>(res: Response, statusCode: number, data: T, message?: string): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    data,
    message,
  });
};

export default apiResponse;
