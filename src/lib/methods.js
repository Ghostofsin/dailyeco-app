import { connectDb } from "./db";
import {  ArticleRates, Footprint, Results, Users } from "./models";

export const getResults = async () => {
  try {
    connectDb();
		const results = await Results.find()
    return  results;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch results");
  }
};


export const getResultByUser = async (userId) => {
  try {
    connectDb();
		const result = await Results.findOne({userId})
 
    return  result;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch results");
  }
};

export const getUserByEmail = async (email) => {
  try {
    connectDb();
		const user = await Users.findOne({ email })
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch user");
  }
};

export const getFootprintByUser = async (userId) => {
  try {
    connectDb();
		const footprint = await Footprint.findOne({userId})
 
    return  footprint;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch results");
  }
};

export const getArticleRateByUser = async (userId) => {
  try {
    connectDb();
		const article = await ArticleRates.find({userId})
    
    return  article;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fatch results");
  }
};