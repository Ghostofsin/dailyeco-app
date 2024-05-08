import mongoose from "mongoose";

const resultsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    result: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const footprintSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
    },
    result: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

const usersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      // required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const articleRatesShema = new mongoose.Schema(
  {
    articleId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Results = mongoose.models?.Results || mongoose.model("Results", resultsSchema);
export const Users = mongoose.models?.Users || mongoose.model("Users", usersSchema);
export const Footprint = mongoose.models?.Footprint || mongoose.model("Footprint", footprintSchema);
export const ArticleRates = mongoose.models?.ArticleRates || mongoose.model("ArticleRates", articleRatesShema);
