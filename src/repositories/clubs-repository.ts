import ClubModel from "../models/club-model";

const database: ClubModel[] = [
  { id: 1, name: "FC Thunder" },
  { id: 2, name: "Royal Lions" },
  { id: 3, name: "Tokyo Strikers" },
  { id: 4, name: "Hurricane Stars" },
  { id: 5, name: "Mountaineers FC" },
  { id: 6, name: "Madrid Titans" },
  { id: 7, name: "Vikings FC" },
  { id: 8, name: "Roma Warriors" },
  { id: 9, name: "Cairo Eagles" },
  { id: 10, name: "Dublin Wolves" },
  { id: 11, name: "Paris Stars" },
  { id: 12, name: "Moscow Bears" },
  { id: 13, name: "Shanghai Dragons" },
  { id: 14, name: "Buenos Aires Foxes" },
  { id: 15, name: "Seoul Knights" },
];

export const findAllClubs = async () => {
  return database;
};

export const findClubById = async (
    id: number
  ): Promise<ClubModel | undefined> => {
    return database.find((club) => club.id === id);
  };
  
  export const insertClub = async (club: ClubModel) => {
    const exists = database.some((c) => c.id === club.id);

  if (!exists) {
    database.push(club);
  } else {
    throw new Error("Club ID already exists");
  }
  };
  
  export const deleteOneClub = async (id: number) => {
      const index = database.findIndex((c) => c.id === id);
  
      if(index !== -1){
          database.splice(index, 1);
          return true;
      }
  
      return false;
  }
  
  export const findAndModifClub = async (id: number, name: string) => {
      const clubIndex = database.findIndex( c => c.id === id)
  
      if(clubIndex !== -1){
        database[clubIndex].name = name;
        return database[clubIndex];
      }
  
      return null;
  }