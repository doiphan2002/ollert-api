/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'


const createNew = async (req, res, next) => {
  try {
    // Điều hướng sang tầng Service

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json({ message: 'Board from Controller: API create new board' })
  } catch (error) {next(error)}
}

export const boardController = {
  createNew
}
