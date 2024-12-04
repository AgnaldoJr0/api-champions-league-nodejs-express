import ClubModel from "../models/club-model";
import * as clubService from "../services/clubs-service"
import { Request, Response } from "express";
import { noContent } from "../utils/http-helper";

export const getClub = async (req: Request, res: Response) => {
    const response = await clubService.getClubService();
    res.status(response.statusCode).json(response.body);
};

export const getClubById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await clubService.getClubByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
  
  export const postClub = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const httpResponse = await clubService.createClubService(bodyValue);
    if (httpResponse) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      const response = await noContent();
      res.status(response.statusCode).json(response.body);
    }
  };
  
  export const deleteClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await clubService.deleteClubService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
  
  export const updateClub = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: ClubModel = req.body;
    const httpResponse = await clubService.updateClubService(id, bodyValue);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
