import PlayersModel from "../models/player-model";
import StatisticsModel from "../models/statistics-model";

const database: PlayersModel[] = [
  {
    id: 1,
    name: "Lucas Almeida",
    club: "FC Thunder",
    nationality: "Brazilian",
    position: "Forward",
    statistics: {
      Overall: 85,
      Pace: 88,
      Shooting: 84,
      Passing: 80,
      Dribbling: 86,
      Defending: 50,
      Physical: 75,
    },
  },
  {
    id: 2,
    name: "James Foster",
    club: "Royal Lions",
    nationality: "English",
    position: "Midfielder",
    statistics: {
      Overall: 83,
      Pace: 75,
      Shooting: 78,
      Passing: 88,
      Dribbling: 84,
      Defending: 70,
      Physical: 72,
    },
  },
  {
    id: 3,
    name: "Akihiro Tanaka",
    club: "Tokyo Strikers",
    nationality: "Japanese",
    position: "Defender",
    statistics: {
      Overall: 80,
      Pace: 70,
      Shooting: 60,
      Passing: 74,
      Dribbling: 65,
      Defending: 88,
      Physical: 85,
    },
  },
  {
    id: 4,
    name: "Diego Morales",
    club: "Hurricane Stars",
    nationality: "Argentinian",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 90,
      Shooting: 85,
      Passing: 82,
      Dribbling: 89,
      Defending: 45,
      Physical: 78,
    },
  },
  {
    id: 5,
    name: "Ethan Brooks",
    club: "Mountaineers FC",
    nationality: "American",
    position: "Goalkeeper",
    statistics: {
      Overall: 81,
      Pace: 50,
      Shooting: 40,
      Passing: 65,
      Dribbling: 60,
      Defending: 90,
      Physical: 70,
    },
  },
  {
    id: 6,
    name: "Sergio Díaz",
    club: "Madrid Titans",
    nationality: "Spanish",
    position: "Midfielder",
    statistics: {
      Overall: 84,
      Pace: 77,
      Shooting: 80,
      Passing: 86,
      Dribbling: 83,
      Defending: 72,
      Physical: 74,
    },
  },
  {
    id: 7,
    name: "Jonas Svensson",
    club: "Vikings FC",
    nationality: "Norwegian",
    position: "Defender",
    statistics: {
      Overall: 79,
      Pace: 73,
      Shooting: 60,
      Passing: 71,
      Dribbling: 68,
      Defending: 85,
      Physical: 80,
    },
  },
  {
    id: 8,
    name: "Marco Bianchi",
    club: "Roma Warriors",
    nationality: "Italian",
    position: "Midfielder",
    statistics: {
      Overall: 86,
      Pace: 78,
      Shooting: 81,
      Passing: 90,
      Dribbling: 85,
      Defending: 75,
      Physical: 77,
    },
  },
  {
    id: 9,
    name: "Youssef Karim",
    club: "Cairo Eagles",
    nationality: "Egyptian",
    position: "Forward",
    statistics: {
      Overall: 84,
      Pace: 87,
      Shooting: 82,
      Passing: 78,
      Dribbling: 85,
      Defending: 40,
      Physical: 76,
    },
  },
  {
    id: 10,
    name: "Liam O'Connor",
    club: "Dublin Wolves",
    nationality: "Irish",
    position: "Goalkeeper",
    statistics: {
      Overall: 82,
      Pace: 52,
      Shooting: 45,
      Passing: 67,
      Dribbling: 63,
      Defending: 88,
      Physical: 72,
    },
  },
  {
    id: 11,
    name: "Pierre Dubois",
    club: "Paris Stars",
    nationality: "French",
    position: "Forward",
    statistics: {
      Overall: 86,
      Pace: 85,
      Shooting: 88,
      Passing: 80,
      Dribbling: 87,
      Defending: 42,
      Physical: 77,
    },
  },
  {
    id: 12,
    name: "Viktor Ivanov",
    club: "Moscow Bears",
    nationality: "Russian",
    position: "Defender",
    statistics: {
      Overall: 81,
      Pace: 68,
      Shooting: 62,
      Passing: 70,
      Dribbling: 65,
      Defending: 87,
      Physical: 84,
    },
  },
  {
    id: 13,
    name: "Zhang Wei",
    club: "Shanghai Dragons",
    nationality: "Chinese",
    position: "Midfielder",
    statistics: {
      Overall: 82,
      Pace: 72,
      Shooting: 74,
      Passing: 86,
      Dribbling: 80,
      Defending: 68,
      Physical: 70,
    },
  },
  {
    id: 14,
    name: "Mateo López",
    club: "Buenos Aires Foxes",
    nationality: "Uruguayan",
    position: "Forward",
    statistics: {
      Overall: 83,
      Pace: 86,
      Shooting: 85,
      Passing: 78,
      Dribbling: 84,
      Defending: 38,
      Physical: 75,
    },
  },
  {
    id: 15,
    name: "David Kim",
    club: "Seoul Knights",
    nationality: "South Korean",
    position: "Goalkeeper",
    statistics: {
      Overall: 80,
      Pace: 48,
      Shooting: 38,
      Passing: 64,
      Dribbling: 61,
      Defending: 88,
      Physical: 71,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayersModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayersModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayersModel) => {
  const exists = database.some((p) => p.id === player.id);

  if (!exists) {
    database.push(player);
  } else {
    throw new Error("Player ID already exists");
  }
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const playerIndex = database.findIndex((p) => p.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
