import * as httpResponse from "../utils/http-helper";
import * as clubRepository from "../repositories/clubs-repository";
import ClubModel from "../models/club-model";

export const getClubService = async () => {
  const data = await clubRepository.findAllClubs();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }
  return response;
};

export const getClubByIdService = async (id: number) => {
  const data = await clubRepository.findClubById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createClubService = async (club: ClubModel) => {
  let response = null;

  if (Object.keys(club).length !== 0) {
    await clubRepository.insertClub(club);
    response = await httpResponse.created();
  } else {
    response = await httpResponse.badRequest();
  }

  return response;
};

export const deleteClubService = async (id: number) => {
  let response = null;
  const isDeleted = await clubRepository.deleteOneClub(id);

  if (isDeleted) {
    response = httpResponse.ok({ message: "deleted" });
  } else {
    response = await httpResponse.badRequest();
  }
  return response;
};

export const updateClubService = async (id: number, club: ClubModel) => {
  const data = await clubRepository.findAndModifClub(id, club.name);
  let response = null;

  if (!data || Object.keys(data).length === 0) {
    response = await httpResponse.badRequest();
  } else {
    response = await httpResponse.ok(data);
  }

  return response;
};
