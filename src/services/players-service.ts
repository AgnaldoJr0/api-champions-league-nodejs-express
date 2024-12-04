import { response } from "express";
import playersModel from "../models/player-model";
import StatisticsModel from "../models/statistics-model";
import * as playerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await playerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await playerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: playersModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await playerRepository.insertPlayer(player);
    response = await httpResponse.created();
  } else {
    response = await httpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await playerRepository.deleteOnePlayer(id);

  if(isDeleted){
  response = httpResponse.ok({ message: "deleted" });
  }else{
    response = await httpResponse.badRequest();
  }
  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await playerRepository.findAndModifPlayer(id, statistics);
  let response = null;

  if (!data || Object.keys(data).length === 0) {
    response = await httpResponse.badRequest();
  } else {
    response = await httpResponse.ok(data);
  }

  return response;
};
