"use server";

import { revalidatePath } from "next/cache";
import countRightAnswers from "../quiz/countRightAnswers";
import { connectDb } from "../db";
import { Footprint, Results, ArticleRates } from "../models";
import { redirect } from "next/navigation";

export async function saveResults(formData) {
  const sum = countRightAnswers(formData);
  const { userId } = Object.fromEntries(formData);
  let success = false;
  try {
    connectDb();

    const newResult = new Results({
      result: sum,
      userId: userId,
    });

    await newResult.save();
    success = true;

    console.log("saved to db");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  } finally {
    if (success) {
      redirect("/dashboard", "push");
    }
  }
}

export async function updateResults(formData) {
  const sum = countRightAnswers(formData);
  const { userId } = Object.fromEntries(formData);
  let success = false;
  try {
    connectDb();

    await Results.findOneAndUpdate(
      { userId: userId },
      { result: sum },
      {
        new: true,
      }
    );
    success = true;

    console.log("result updated");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  } finally {
    if (success) {
      redirect("/dashboard", "push");
    }
  }
}

export async function saveFootprint(formData) {
  const { userId, footprints, totalFootprint } = Object.fromEntries(formData);
  const date = new Date().toISOString().slice(0, 10);
  let success = false;
  try {
    connectDb();

    const footprint = await Footprint.findOne({ userId });

    if (footprint) { // there is a user
      const result = footprint.result;
      if (result[result.length - 1].date === date) { // date is the same
        result.pop();
        result.push({
          date: date,
          details: JSON.parse(footprints),
          total: totalFootprint,
        });
        await Footprint.findOneAndUpdate(
          { userId: userId },
          { result: result },
          {
            new: true,
          }
        );
      } else { // date is diffferent
        result.push({
          date: date,
          details: JSON.parse(footprints),
          total: totalFootprint,
        });
        await Footprint.findOneAndUpdate(
          { userId: userId },
          { result: result },
          {
            new: true,
          }
        );
        console.log("footprint", footprint.result);
      }

 
    } else { // there is no user
      const newResult = new Footprint({
        result: [
          {
            date: date,
            details: JSON.parse(footprints),
            total: totalFootprint,
          },
        ],
        userId: userId,
      });
      await newResult.save();
    }
    success = true;

    console.log("saved to db");
    revalidatePath("/dashboard/footprint");
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  } finally {
    if (success) {
      redirect("/dashboard/footprint", "push");
    }
  }
}


export async function saveArticleRate(userId, rate, articleUrl) {
  let success = false;
  try {
    connectDb();

    const newRate = new ArticleRates({
      articleId: articleUrl,
      userId: userId,
      rate: rate
    });

    await newRate.save();
    success = true;

    console.log("saved to db");
    revalidatePath(articleUrl);
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  } finally {
    if (success) {
      redirect(articleUrl, "push");
    }
  }
}

export async function updateArticleRate(userId, rate, articleUrl) {

  let success = false;
  try {
    connectDb();

    await ArticleRates.findOneAndUpdate(
      { articleId: articleUrl, 
        userId: userId},
      { rate: rate },
      {
        new: true,
      }
    );
    success = true;

    console.log("saved to db");
    revalidatePath(articleUrl);
  } catch (error) {
    console.log(error);
    return "Something went wrong!";
  } finally {
    if (success) {
      redirect(articleUrl, "push");
    }
  }
}