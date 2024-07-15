import { ID } from "node-appwrite";
import { DATABASE_ID, PATIENT_COLLECTION_ID, databases } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createAppointment = async (appointment: CreateAppointmentParams) => {
  try {
    const newAppointment = await databases.createDocument(DATABASE_ID!, PATIENT_COLLECTION_ID!, ID.unique(), appointment);
    return parseStringify(newAppointment);
  } catch (error) {
    console.log(error);
  }
};
